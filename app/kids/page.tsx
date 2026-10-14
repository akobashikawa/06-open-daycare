import Sidebar from "../components/Sidebar";
import KidCard from "../components/KidCard";
import { kids } from "../data/kids";

export default function KidsPage() {
  return (
    <div className="flex min-h-screen bg-[#F6ECDF]">
      <Sidebar />

      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <div className="max-w-[880px] w-full mx-auto px-10 py-8 pb-20">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-extrabold tracking-[0.8px] text-[#D9583C] mb-1">GESTIÓN</div>
              <h1 className="font-fredoka font-semibold text-3xl text-[#3F362E] m-0">Niños</h1>
            </div>
            <a href="/add-kid" className="flex items-center gap-2 px-[18px] py-3 rounded-2xl bg-gradient-to-b from-[#F4977E] to-[#EE8164] text-white font-bold text-sm shadow-sm shadow-[#EE8164]/30">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Agregar niño
            </a>
          </div>
          
          <div className="flex items-center gap-3 bg-[#FFFDF9] border border-[#ECE0D0] rounded-2xl px-4 py-3 mb-6">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0A290" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input placeholder="Buscar niño…" className="flex-1 border-none bg-transparent text-[15px] text-[#3F362E] placeholder-[#B6A99B] focus:outline-none" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-extrabold tracking-[0.8px] text-[#3F362E]">SALA SOLES</span>
            <span className="text-[13px] text-[#A89A8B]">{kids.length} niños</span>
            <span className="flex-1 h-px bg-[#E7DAC8]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {kids.map((kid) => (
              <KidCard key={kid.id} {...kid} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
