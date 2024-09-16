"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import CustomForm from "../CustomForm";
import { UserFormValidation } from "@/lib/validation";
import { useState } from "react";
import SubmitButton from "../ui/SubmitButton";
import { createUser } from "@/lib/actions/patients.action";
import { useRouter } from "next/navigation";
import { FormControl } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { GenderOption } from "@/constants";
import { Label } from "@radix-ui/react-label";

export enum FormFieldType {
  INPUT = "input",
  TEAXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

export const RegisterForm = ({ user }: { user: User }) => {
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

    try {
      const userData = { name, email, phone };
      const user = await createUser(userData);

      if (user) {
        router.push(`/patients/${user.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex-1"
      >
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Welcome 👋</h1>
          <p className="text-dark-700">Let us know more about yourself</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="text-3xl font-bold md:test-24-bold">
              Peronsal Information
            </h2>
          </div>
        </section>

        <CustomForm
          formType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="abhishek"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
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
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomForm
            formType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="birthday"
            label="Birth Day"
            iconSrc="/assets/icons/calendar.svg"
          />
          <CustomForm
            formType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup>
                  {GenderOption.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem value={option} id={option}>
                        <Label htmlFor={option}>{option}</Label>
                      </RadioGroupItem>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
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
        </div>
      </form>
    </FormProvider>
  );
};
