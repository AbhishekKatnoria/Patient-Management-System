import { z } from "zod";

export const UserFormValidation = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), {
    message:
      "Phone number must start with a '+' and be between 10 to 15 digits long.",
  }),
}); 
