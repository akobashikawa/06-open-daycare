import Link from "next/link";

interface KidCardProps {
  id: number;
  name: string;
  age: string;
  parents: string[];
  status: string | null;
}

export default function KidCard({ id, name, age, parents, status }: KidCardProps) {
  const initial = name.charAt(0);
  
  // Deterministic color based on ID
  const colors = [
    { bg: "#A9D9E8", text: "#1F7A93" },
    { bg: "#F4B8CC", text: "#C44A7A" },
    { bg: "#B9DEC4", text: "#3E8B62" },
    { bg: "#F4DC8E", text: "#9A7B1E" },
    { bg: "#C9B6E8", text: "#7B5FC0" },
  ];
  const color = colors[id % colors.length];

  const parentText = parents.length === 0 
    ? "sin padres vinculados" 
    : `${parents.length} padre${parents.length > 1 ? "s" : ""} vinculado${parents.length > 1 ? "s" : ""}`;

  return (
    <Link 
      href={`/kids/${id}`}
      className="kid flex items-center gap-4 min-w-0 bg-[#FFFDF9] border border-[#ECE0D0] rounded-[18px] p-4 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.5)] transition duration-150 hover:border-[#F2A78E] hover:-translate-y-0.5"
    >
      <div 
        className="w-12 h-12 rounded-full font-fredoka font-semibold text-lg flex items-center justify-center flex-none"
        style={{ backgroundColor: color.bg, color: color.text }}
      >
        {initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-fredoka font-semibold text-base text-[#3F362E] truncate">{name}</div>
        <div className="text-[13px] text-[#A89A8B] truncate">{age} · {parentText}</div>
      </div>
      {status && (
        <span 
          className="flex-none text-[11px] font-extrabold px-2.5 py-1 rounded-full"
          style={{ 
            backgroundColor: status === "VINCULAR" ? "#F9D2DE" : "#FBD8CC", 
            color: status === "VINCULAR" ? "#C56486" : "#D9684A" 
          }}
        >
          {status}
        </span>
      )}
      {!status && (
        <svg className="flex-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CBB89F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </Link>
  );
}
