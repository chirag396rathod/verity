import MainLayout from "@/layout/main"
import ForgotPassword from "@/pages/auth/ForgotPassword"
import Login from "@/pages/auth/Login"
import ResetPassword from "@/pages/auth/ResetPassword"
import VerifyOTP from "@/pages/auth/VerifyOTP"
import UserDetails from "@/pages/dashboard/UserDetails"
// import Report from "@/pages/dashboard/Report"
import { Navigate, useRoutes } from "react-router-dom"
import Helpers from "@/pages/dashboard/Helpers"
import Users from "@/pages/dashboard/Users"
import HelperDetails from "@/pages/dashboard/HelperDetails"
import ProtectedRoute from "./ProtectedRoute"
import Specialty from "@/pages/dashboard/Specialty"

const Router = () => {
    return useRoutes([
        {
            path: '',
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <ProtectedRoute redirectAuthenticated={true}> <Navigate to="/login" /> </ProtectedRoute>,
                },
                {
                    path: 'helper',
                    children: [
                        {
                            index: true,
                            element: <ProtectedRoute> <Helpers /> </ProtectedRoute>,
                        },
                        {
                            path: ':id',
                            element: <ProtectedRoute> <HelperDetails /></ProtectedRoute>,
                        }
                    ]
                },
                {
                    path: 'user',
                    children: [
                        {
                            index: true,
                            element: <ProtectedRoute> <Users /> </ProtectedRoute>,
                        },
                        {
                            path: ':id',
                            element: <ProtectedRoute><UserDetails /> </ProtectedRoute>,
                        }
                    ]
                },
                {
                    path: "specialty",
                    element: <ProtectedRoute> <Specialty /> </ProtectedRoute>
                }

            ]
        },
        {
            path: 'login',
            element: <ProtectedRoute redirectAuthenticated={true}> <Login /> </ProtectedRoute>,
        },
        {
            path: 'forgot_password',
            element: <ForgotPassword />
        },
        {
            path: 'verify_otp',
            element: <VerifyOTP />
        },
        {
            path: 'reset_password',
            element: <ResetPassword />
        }
    ])
}

export default Router
