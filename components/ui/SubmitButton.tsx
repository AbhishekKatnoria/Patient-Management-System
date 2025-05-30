import React from "react";
import { Button } from "./button";
import Image from "next/image";

interface ButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

const SubmitButton = ({ isLoading, children, className }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex justify-center gap-4 items-center">
          <Image
            src="assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading ...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
