import {z} from "zod";


const registerValidationSchema = z.object(
    
    {
        body: z.object({
        name: z.string().min(2, "Name must be at least 2 characters long"),
        email: z.email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
        role: z.enum(["customer", "seller"]).optional()
        }),
    }
    
);

const loginValidationSchema = z.object(
    {
        body: z.object(
            {
                email: z.email("Invalid email address"),
                password: z.string().min(1,"password is required"),
            }
        ),

    });

export const AuthValidation = {
    registerValidationSchema,
    loginValidationSchema,
}