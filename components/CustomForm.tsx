"use client";
import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";

interface CustomProps {
  control: Control<any>;
  formType: FormFieldType;
  name: string;
  lable: string;
  placeholder: string;
  iconSrc: string;
  iconAlt: string;
}

const CustomForm = ({ control, name, formType, lable }: CustomProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {formType !== FormFieldType.CHECKBOX && lable && (
            <FormLabel>{lable}</FormLabel>
          )}
        </FormItem>
      )}
    />
  );
};

export default CustomForm;
