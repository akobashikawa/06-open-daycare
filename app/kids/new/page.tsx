import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agregar niño — OpenDayCare",
};

export default function NewKidPage() {
  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-10 bg-[#F6ECDF]">
      <div className="w-full max-w-[520px] bg-[#FBF4EC] border border-[#ECE0D0] rounded-3xl shadow-[0_20px_50px_-24px_rgba(63,54,46,0.35)] overflow-hidden">
        <div className="flex items-center justify-between px-[26px] py-5 border-b border-[#ECE0D0]">
          <Link href="/kids" className="text-[#94887B] font-bold text-[15px]">
            Cancelar
          </Link>
          <span className="font-fredoka font-semibold text-[18px] text-[#3F362E]">
            Agregar niño
          </span>
          <span className="text-[#D9583C] font-extrabold text-[15px] cursor-default">
            Guardar
          </span>
        </div>

        <div className="px-[26px] py-6">
          {/* PLACEHOLDER — reemplazado en Step 2 por AddKidForm */}
          <div className="text-sm text-[#94887B]">Formulario pendiente…</div>
        </div>
      </div>
    </div>
  );
}
