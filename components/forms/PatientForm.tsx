"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import CustomForm from "../CustomForm";
import { UserFormValidation } from "@/lib/validation";
import { useState } from "react";
import SubmitButton from "../ui/SubmitButton";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = "input",
  TEAXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "test",
      email: "test@993gmail.com",
      phone: "",
    },
  });

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    router.push("/patients/register");
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="text-4xl">Hi there, ....</h1>
          <p className="text-dark-700">Get Started with Appointments.</p>
        </section>
        <CustomForm
          formType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="abhishek"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomForm
          formType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="abhishek@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="Email"
        />
        <CustomForm
          formType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Name"
          placeholder="(555) 123-4567"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </FormProvider>
  );
};

export default PatientForm;
