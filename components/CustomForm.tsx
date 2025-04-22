"use client";
import React, { useState } from "react";
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
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup } from "@radix-ui/react-radio-group";

interface CustomProps {
  control: Control<any>;
  formType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { iconAlt, iconSrc, formType, placeholder, renderSkeleton } = props;
  const [startDate, setStartDate] = useState(new Date());

  switch (formType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              width={24}
              height={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            placeholder={placeholder}
            defaultCountry="US"
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={(value) => field.onChange(value)}
            className="input-phone"
          />
        </FormControl>
      );

    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              width={24}
              height={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;

    default:
      break;
  }
};
const CustomForm = (props: CustomProps) => {
  const { control, name, formType, label } = props;
  return (
    <div className="w-full">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {formType !== FormFieldType.CHECKBOX && label && (
              <FormLabel>{label}</FormLabel>
            )}

            <RenderField field={field} props={props} />
            <FormMessage className="shad-error" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomForm;
