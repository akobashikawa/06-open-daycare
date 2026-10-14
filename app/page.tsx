import Link from "next/link";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#F6ECDF]">
      <Sidebar />

      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <div className="max-w-[760px] w-full mx-auto px-10 py-8 pb-20">
          <div className="mb-6">
            <div className="text-xs font-extrabold tracking-[0.8px] text-[#D9583C] mb-1">GUARDERÍA · SALA SOLES</div>
            <h1 className="font-fredoka font-semibold text-3xl text-[#3F362E] m-0">Buenas, Caro</h1>
            <p className="mt-1.5 text-[#94887B] text-sm">12 niños · martes 17 jun</p>
          </div>

          <Link href="/crear-publicacion" className="flex items-center gap-3.5 bg-[#FFFDF9] border border-[#ECE0D0] rounded-2xl px-[18px] py-3.5 mb-6 shadow-sm shadow-[#785A3C]/10">
            <div className="w-10 h-10 rounded-full bg-[#F2937A] text-white font-fredoka font-semibold text-base flex items-center justify-center flex-none">C</div>
            <span className="flex-1 text-[#A89A8B] text-[15px]">Compartí un momento…</span>
            <span className="w-9 h-9 rounded-xl bg-[#FBE3D8] text-[#E0654A] flex items-center justify-center">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </span>
          </Link>

          <div className="flex items-center gap-3.5 mb-3.5">
            <span className="text-xs font-extrabold tracking-[0.8px] text-[#8A7C6D]">PUBLICADO HOY</span>
            <span className="flex-1 h-px bg-[#E7DAC8]" />
          </div>

          <div className="flex flex-col gap-4">
            <PostCard
              avatar={{ initial: "M", bg: "#A9D9E8", color: "#1F7A93" }}
              name="Mateo"
              time="14:20"
              badge={{ label: "LOGRO", bg: "#CFEBD8", dot: "#3E9B6C", text: "#3E9B6C" }}
              audience="Para: familia de Mateo"
              text="¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso."
              likes={3}
              comments={1}
            />
            <PostCard
              avatar={{ initial: "M", bg: "#A9D9E8", color: "#1F7A93" }}
              name="Mateo"
              time="09:40"
              badge={{ label: "ACTIVIDAD", bg: "#C7E7F1", dot: "#2E89A6", text: "#2E89A6" }}
              audience="Para: familia de Mateo"
              text="Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores."
              photoLabel="Foto · pintando con témperas"
              likes={5}
              comments={2}
            />
            <PostCard
              avatar={{
                bg: "#CCD8F4",
                color: "#4E72C8",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                ),
              }}
              name="Anuncio general"
              time="07:50"
              badge={{ label: "ANUNCIO", bg: "#CCD8F4", dot: "#4E72C8", text: "#4E72C8" }}
              audience="Para: toda la sala"
              text="El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua."
              likes={8}
              comments={0}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
