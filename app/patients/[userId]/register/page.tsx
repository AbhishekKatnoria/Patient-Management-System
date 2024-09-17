import { RegisterForm } from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patients.action";
import Image from "next/image";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen gap-5">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            width={100}
            height={100}
            alt="Logo"
            src="/assets/icons/logo-full.svg"
            className="w-fit h-10 mb-12"
            loading="lazy"
          />

          <RegisterForm user={user}/>
        </div>
      </section>
      <Image
        width={1000}
        height={1000}
        alt="Home Image"
        src="/assets/images/register-img.png"
        className="side-img max-w-[390px]"
        loading="lazy"
      />
    </div>
  );
};

export default Register;