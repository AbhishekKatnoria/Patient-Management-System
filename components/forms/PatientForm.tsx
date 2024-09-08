"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import CustomForm from "../CustomForm";
import SubmitButtom from "../ui/SubmitButton";
import { UserFormValidation } from "@/lib/validation";
import { useState } from "react";

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
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    const { username, email, phone } = values;
    setIsLoading(true);

    try {
      const userData = { username, email, phone };
    } catch (error) {
      console.log(error);
    }
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
          name="username"
          lable="Full Name"
          placeholder="abhishek"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomForm
          formType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          lable="Email"
          placeholder="abhishek@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="Email"
        />
        <CustomForm
          formType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          lable="Phone Name"
          placeholder="abhishek"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </FormProvider>
  );
};

export default PatientForm;
