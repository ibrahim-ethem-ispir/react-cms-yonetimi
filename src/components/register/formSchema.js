import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, { message: "Adınızı giriniz" }),

  lastname: z
    .string({ message: "Soyadınızı giriniz" })
    .min(3, { message: "Soyadınızı giriniz" }),
  email: z
    .string({ message: "Lütfen Email adresinizi giriniz" })
    .email({ message: "Lütfen geçerli bir email adresi giriniz" }),
  password: z
    .string({ message: "Lütfen Şifrenizi giriniz" })
    .min(6, { message: "Şifreniz en az 6 karakterden oluşabilir" })
    .max(36, { message: "Şifreniz en fazla 36 karakterden oluşabilir" }),
  passwordConfirm: z
    .string({ message: "Lütfen Şifrenizi tekrar giriniz" })
    .min(6, { message: "Şifreniz en az 6 karakterden oluşabilir" })
    .max(36, { message: "Şifreniz en fazla 36 karakterden oluşabilir" }),
});
