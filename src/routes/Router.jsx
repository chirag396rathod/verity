import MainLayout from "@/layout/main";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerifyOTP from "@/pages/auth/VerifyOTP";
import UserDetails from "@/pages/dashboard/UserDetails";
// import Report from "@/pages/dashboard/Report"
import { Navigate, useRoutes } from "react-router-dom";
import Helpers from "@/pages/dashboard/Helpers";
import Users from "@/pages/dashboard/Users";
import HelperDetails from "@/pages/dashboard/HelperDetails";
import ProtectedRoute from "./ProtectedRoute";
import Specialty from "@/pages/dashboard/Specialty";
import PostReports from "@/pages/dashboard/postReports/postReports";
import RemoveFromTag from "@/pages/dashboard/removeFromTag/RemoveFromTag";
import ProfileReports from "@/pages/dashboard/profileReports/ProfileReports";
import CommunityReports from "@/pages/dashboard/communityReports/CommunityReports";
import ProfileVerification from "@/pages/dashboard/profileVerification/ProfileVerification";
import AppFeedback from "@/pages/dashboard/appFeedback/AppFeedback";
import FriendlyAdvice from "@/pages/dashboard/friendlyAdvice/FriendlyAdvice";
import Procedure from "@/pages/dashboard/procedure/Procedure";
import DeleteAccount from "@/pages/dashboard/deleteAccount/DeleteAccount";

const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute redirectAuthenticated={true}>
              <Navigate to="/login" />
            </ProtectedRoute>
          ),
        },
        {
          path: "helper",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <Helpers />
                </ProtectedRoute>
              ),
            },
            {
              path: ":id",
              element: (
                <ProtectedRoute>
                  <HelperDetails />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "post_reports",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <PostReports />
                </ProtectedRoute>
              ),
            },
            {
              path: ":id",
              element: (
                <ProtectedRoute>
                  <UserDetails />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "remove_from_tag",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <RemoveFromTag />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "profile_reports",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <ProfileReports />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "community_reports",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <CommunityReports />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "profile_verification",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <ProfileVerification />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "app_feedback",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <AppFeedback />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "friendly_advice",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <FriendlyAdvice />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "procedure",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <Procedure />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "delete_account",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <DeleteAccount />
                </ProtectedRoute>
              ),
            },
          ],
        },

        {
          path: "user",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              ),
            },
            {
              path: ":id",
              element: (
                <ProtectedRoute>
                  <UserDetails />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "specialty",
          element: (
            <ProtectedRoute>
              <Specialty />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "login",
      element: (
        <ProtectedRoute redirectAuthenticated={true}>
          <Login />
        </ProtectedRoute>
      ),
    },
    {
      path: "forgot_password",
      element: <ForgotPassword />,
    },
    {
      path: "verify_otp",
      element: <VerifyOTP />,
    },
    {
      path: "reset_password",
      element: <ResetPassword />,
    },
  ]);
};

export default Router;
