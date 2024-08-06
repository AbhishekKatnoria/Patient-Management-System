import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
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

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="text-dark-600">@carepulse copyright</p>
            <Link className="text-green-500" href="/?admin=true">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        width={1000}
        height={1000}
        alt="Home Image"
        src="/assets/images/onboarding-img.png"
        className="side-img max-w-[50%]"
        loading="lazy"
      />
    </div>
  );
}
