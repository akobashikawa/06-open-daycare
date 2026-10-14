"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const activeClass = "bg-[#FBE3D8] text-[#D9583C] font-bold";
  const inactiveClass = "bg-transparent text-[#6E6359] font-medium";

  return (
    <aside className="w-[248px] flex-none bg-[#FFFDF9] border-r border-[#ECE0D0] flex flex-col px-4 py-6 sticky top-0 h-screen overflow-hidden">
      <Link href="/" className="flex items-center gap-3 px-2 py-1 mb-5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F8C3A8] to-[#F2937A] flex items-center justify-center flex-none">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </div>
        <div>
          <div className="font-fredoka font-semibold text-[17px] text-[#3F362E] leading-tight">OpenDayCare</div>
          <div className="text-xs text-[#A89A8B] mt-0.5">Sala Soles</div>
        </div>
      </Link>

      <Link href="/crear-publicacion" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-b from-[#F4977E] to-[#EE8164] text-white font-bold text-sm shadow-sm shadow-[#EE8164]/40 mb-5">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        Nueva publicación
      </Link>

      <nav className="flex flex-col gap-1 flex-1 mt-1">
        <Link href="/" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm ${isActive("/") ? activeClass : inactiveClass}`}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
          </svg>
          Feed
        </Link>
        <Link href="/ninos" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm ${isActive("/ninos") ? activeClass : inactiveClass}`}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="7" r="3" />
            <circle cx="17" cy="9" r="2.4" />
            <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 20a5 5 0 0 1 5.5-4.9" />
          </svg>
          Niños
        </Link>
        <Link href="/avisos" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm ${isActive("/avisos") ? activeClass : inactiveClass}`}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
          Avisos
        </Link>
        <Link href="/mi-cuenta" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm ${isActive("/mi-cuenta") ? activeClass : inactiveClass}`}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Mi cuenta
        </Link>
      </nav>

      <div className="border-t border-[#ECE0D0] pt-3.5 mt-3">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-9 h-9 rounded-full bg-[#F2937A] text-white font-fredoka font-semibold text-base flex items-center justify-center flex-none">
            C
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm text-[#3F362E]">Caro Giménez</div>
            <div className="text-xs text-[#A89A8B]">Maestra · Soles</div>
          </div>
          <Link href="/login" title="Cerrar sesión" className="w-8 h-8 rounded-xl bg-[#F6ECDF] text-[#94887B] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
}
