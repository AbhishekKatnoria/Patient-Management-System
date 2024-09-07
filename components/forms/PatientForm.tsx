"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import CustomForm from "../CustomForm";

export enum FormFieldType {
  INPUT = "input",
  TEAXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
        {/* <CustomForm
            formType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="usename"
            lable="Full Name"
            placeholder="abhishek"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          /> */}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default PatientForm;
