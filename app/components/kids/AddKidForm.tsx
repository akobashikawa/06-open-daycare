"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const labelClass =
  "block text-xs font-extrabold tracking-[0.7px] text-[#94887B] mb-2";

const fieldClass =
  "w-full min-w-0 px-4 py-[13px] rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[15px] text-[#3F362E] placeholder-[#B6A99B] focus:outline-none focus:border-[#F2A78E] focus:ring-2 focus:ring-[#F2A78E]/25";

export default function AddKidForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [allergies, setAllergies] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        router.push("/kids");
      }}
    >
      <div className="flex items-center justify-between gap-3 px-[26px] py-5 border-b border-[#ECE0D0]">
        <Link href="/kids" className="text-[#94887B] font-bold text-[15px]">
          Cancelar
        </Link>
        <span className="font-fredoka font-semibold text-[18px] text-[#3F362E]">
          Agregar niño
        </span>
        <button
          type="submit"
          className="text-[#D9583C] font-extrabold text-[15px] cursor-pointer focus:outline-none focus-visible:underline"
        >
          Guardar
        </button>
      </div>

      <div className="px-[26px] py-6">
        <label htmlFor="kid-name" className={labelClass}>
          NOMBRE COMPLETO
        </label>
        <input
          id="kid-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ej. Martina López"
          required
          className={`${fieldClass} mb-[18px]`}
        />

        <div className="flex flex-col sm:flex-row gap-[14px] mb-[18px]">
          <div className="flex-1 min-w-0">
            <label htmlFor="kid-birth-date" className={labelClass}>
              FECHA DE NACIMIENTO
            </label>
            <input
              id="kid-birth-date"
              type="date"
              value={birthDate}
              onChange={(event) => setBirthDate(event.target.value)}
              required
              className={fieldClass}
            />
          </div>

          <div className="flex-1 min-w-0">
            <label htmlFor="kid-room" className={labelClass}>
              SALA
            </label>
            <div className="relative">
              <select
                id="kid-room"
                defaultValue="Soles"
                className={`${fieldClass} appearance-none pr-10 font-bold`}
              >
                <option value="Soles">Soles</option>
              </select>
              <svg
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B0A290"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <label htmlFor="kid-allergies" className={labelClass}>
          ALERGIAS (ETIQUETAS)
        </label>
        <input
          id="kid-allergies"
          value={allergies}
          onChange={(event) => setAllergies(event.target.value)}
          placeholder="Ej. Maní, Lactosa"
          className={`${fieldClass} mb-[18px]`}
        />

        <label htmlFor="kid-notes" className={labelClass}>
          NOTAS MÉDICAS
        </label>
        <textarea
          id="kid-notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Indicaciones, medicación, contactos…"
          className={`${fieldClass} min-h-[90px] resize-y leading-relaxed`}
        />
      </div>
    </form>
  );
}
