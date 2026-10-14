import Link from "next/link";

interface PostCardProps {
  avatar: { initial?: string; bg: string; color: string; icon?: React.ReactNode };
  name: string;
  time: string;
  badge: { label: string; bg: string; dot: string; text: string };
  audience: string;
  text: string;
  photoLabel?: string;
  likes: number;
  comments: number;
}

export default function PostCard({ avatar, name, time, badge, audience, text, photoLabel, likes, comments }: PostCardProps) {
  return (
    <div className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-2xl p-5 shadow-sm shadow-[#785A3C]/10">
      <div className="flex items-center gap-3 mb-3.5">
        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-fredoka font-semibold text-[17px] flex-none`} style={{ backgroundColor: avatar.bg, color: avatar.color }}>
          {avatar.icon ? avatar.icon : avatar.initial}
        </div>
        <div className="flex-1">
          <div className="font-fredoka font-semibold text-[16.5px] text-[#3F362E]">{name}</div>
          <div className="text-xs text-[#A89A8B]">{time} · publicado por vos</div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: badge.bg }}>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: badge.dot }}></span>
          <span className="text-xs font-extrabold tracking-[0.5px]" style={{ color: badge.text }}>{badge.label}</span>
        </div>
      </div>
      <div className="text-xs text-[#A89A8B] mb-2.5">{audience}</div>
      <p className="text-[15.5px] leading-[1.55] text-[#4A4038] m-0 mb-3.5">{text}</p>
      {photoLabel && (
        <div className="flex flex-col items-center justify-center gap-2 mt-3.5 border-2 border-dashed border-[#DBCDBA] rounded-2xl bg-[#F4ECE1] h-50 text-[#B0A290]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21"/></svg>
          <span className="text-[13.5px]">{photoLabel}</span>
        </div>
      )}
      <div className="flex items-center gap-4 mt-4 pt-3.5 border-t border-[#F0E6D8]">
        <span className="flex items-center gap-2 text-[#E0654A] font-bold text-sm">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="#E0654A" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          {likes}
        </span>
        <Link href="/detalle-publicacion" className="flex items-center gap-2 text-[#94887B] font-bold text-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>
          {comments}
        </Link>
        <div className="flex-1" />
        <Link href="/crear-publicacion" className="text-[#C5503A] font-bold text-sm">Editar</Link>
      </div>
    </div>
  );
}
