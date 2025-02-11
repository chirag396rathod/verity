import { FormProvider as Form } from "react-hook-form";

const FormProvider = ({ children,onSubmit,methods }) => {
    return (
        <Form {...methods}>
            <form noValidate onSubmit={onSubmit}>
                {children}
            </form>
        </Form>
    )
}

export default FormProvider;
