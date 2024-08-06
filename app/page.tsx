import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            width={100}
            height={100}
            alt=""
            src="/assets/icons/logo-full.svg"
            className="w-fit h-10 mb-12"
          />

          <PatientForm />
        </div>
      </section>
    </div>
  );
}
