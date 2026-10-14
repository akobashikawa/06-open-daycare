import { notFound } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import { kids } from "@/app/data/kids";
import Link from "next/link";

// Next.js 16: params is Promise; must await before parseInt.
export default async function KidProfilePage({ params }: { params: Promise<{ kid_id: string }> }) {
  const { kid_id } = await params;
  const id = parseInt(kid_id, 10);
  const kid = kids.find((k) => k.id === id);

  if (!kid || Number.isNaN(id)) {
    return (
      <div className="flex min-h-screen bg-[#F6ECDF]">
        <Sidebar />
        <main className="flex-1 min-w-0 h-screen overflow-y-auto">
          <div className="max-w-[880px] w-full mx-auto px-10 py-20 text-center">
            <h1 className="font-fredoka text-3xl text-[#3F362E] mb-4">Niño no encontrado</h1>
            <Link href="/kids" className="inline-block text-[#D9684A] underline">Volver a Niños</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F6ECDF]">
      <Sidebar />
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <div className="max-w-[880px] w-full mx-auto px-10 py-8 pb-20">
          <Link href="/kids" className="text-[#A89A8B] hover:text-[#D9684A] mb-6 inline-block">← Volver a Niños</Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            {/* Main column */}
            <div>
              <div className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-[18px] p-6 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.5)]">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-20 h-20 rounded-full bg-[#A9D9E8] text-[#1F7A93] font-fredoka font-semibold text-3xl flex items-center justify-center flex-none shadow-inner">
                    {kid.name.charAt(0)}
                  </div>
                  <div>
                    <h1 className="font-fredoka text-2xl text-[#3F362E]">{kid.name}</h1>
                    <p className="text-[#A89A8B]">{kid.age} · Sala {kid.id % 3 + 1}</p>
                  </div>
                </div>

                {kid.allergiesNotes && (
                  <div className="mb-5 p-3 bg-[#FBD8CC]/30 border border-[#FBD8CC] rounded-xl text-[#D9684A] text-sm leading-relaxed">
                    <strong>Alerta de alergias:</strong> {kid.allergiesNotes}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-[#F6ECDF] rounded-lg p-3">
                    <span className="block text-[#A89A8B] text-xs">Fecha de nacimiento</span>
                    <span className="font-medium text-[#3F362E]">{kid.birthDate}</span>
                  </div>
                  <div className="bg-[#F6ECDF] rounded-lg p-3">
                    <span className="block text-[#A89A8B] text-xs">Fecha de ingreso</span>
                    <span className="font-medium text-[#3F362E]">{kid.entryDate}</span>
                  </div>
                  <div className="bg-[#F6ECDF] rounded-lg p-3">
                    <span className="block text-[#A89A8B] text-xs">Sala</span>
                    <span className="font-medium text-[#3F362E]">Sala {kid.id % 3 + 1}</span>
                  </div>
                  <div className="bg-[#F6ECDF] rounded-lg p-3">
                    <span className="block text-[#A89A8B] text-xs">Estado</span>
                    <span className="font-medium text-[#3F362E]">{kid.status ?? "—"}</span>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button className="px-4 py-2 rounded-full bg-[#3F362E] text-white text-sm">Editar</button>
                  <Link href="#" className="px-4 py-2 rounded-full border border-[#ECE0D0] text-[#3F362E] text-sm">Resumen del día</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-[18px] p-6 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.5)]">
                <h2 className="font-fredoka text-lg text-[#3F362E] mb-4">Padres vinculados</h2>
                {kid.parents.length === 0 ? (
                  <p className="text-[#A89A8B] text-sm">Sin padres vinculados</p>
                ) : (
                  <ul className="space-y-3">
                    {kid.parents.map((p) => (
                      <li key={p.name} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-[#3F362E]">{p.name}</div>
                          <div className="text-xs text-[#A89A8B]">{p.role}</div>
                        </div>
                        <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${p.status === "ACTIVA" ? "bg-[#B9DEC4] text-[#3E8B62]" : "bg-[#F4DC8E] text-[#9A7B1E]"}`}>{p.status}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link href="#" className="mt-5 block text-center w-full py-2 rounded-xl bg-[#F6ECDF] text-[#D9684A] text-sm font-medium">Vincular otro padre</Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
