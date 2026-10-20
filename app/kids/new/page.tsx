import type { Metadata } from "next";
import AddKidForm from "@/app/components/kids/AddKidForm";

export const metadata: Metadata = {
  title: "Agregar niño — OpenDayCare",
};

export default function NewKidPage() {
  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-10 bg-[#F6ECDF]">
      <div className="w-full max-w-[520px] bg-[#FBF4EC] border border-[#ECE0D0] rounded-3xl shadow-[0_20px_50px_-24px_rgba(63,54,46,0.35)] overflow-hidden">
        <AddKidForm />
      </div>
    </div>
  );
}
