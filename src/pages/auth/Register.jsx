import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import registerImage from "../../assets/images/register-image.jpg";
import { formSchema } from "../../components/register/formSchema";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const formState = useForm({
    initialValues: {
      name: "",
    },
    validate: zodResolver(formSchema),
  });

  return (
    <div className="w-full text-dark h-screen bg-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="hidden md:block bg-slate-300">
        <img
          src={registerImage}
          alt="Resim"
          className="w-full max-h-screen min-h-screen object-cover"
        />
      </div>
      <div className="bg-slate-100 flex justify-center items-center flex-col">
        <h1 className="text-3xl pb-5 text-rose-500"> Kayıt Ol </h1>
        <div className="w-[85%] sm:w-[60%] md:w-[40%]">
          <form
            onSubmit={formState.onSubmit((values) => console.log(values))}
            className="w-full space-y-6"
          >
            <TextInput
              placeholder="Adınızı giriniz"
              id="name"
              label="Ad"
              withAsterisk
              disabled={isLoading}
              {...formState.getInputProps("name")}
            />
            <TextInput
              placeholder="Soyadınızı giriniz"
              id="lastname"
              label="Soyad"
              withAsterisk
              disabled={isLoading}
              {...formState.getInputProps("lastname")}
            />
            <TextInput
              placeholder="Lütfen Email giriniz"
              id="email"
              label="Email"
              withAsterisk
              disabled={isLoading}
              {...formState.getInputProps("email")}
            />
            <TextInput
              placeholder="Lütfen Şifrenizi giriniz"
              id="password"
              label="Şifreniz"
              withAsterisk
              type="password"
              disabled={isLoading}
              {...formState.getInputProps("password")}
            />
            <TextInput
              placeholder="Lütfen Tekrar Şifrenizi giriniz"
              id="passwordConfirm"
              label="Şifrenizi Onaylayın"
              withAsterisk
              type="password"
              disabled={isLoading}
              {...formState.getInputProps("passwordConfirm")}
            />
            <Button leftSection={<IoSend />} type="submit" fullWidth>
              Kayıt Ol
            </Button>
          </form>
        </div>
        <div className="mt-5">
          <div>Hesabınız Var Mı ?</div>
          <div className="font-bold cursor-pointer text-blue-500 " onClick={() => navigate("/login")} >Giriş Yapınız</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
