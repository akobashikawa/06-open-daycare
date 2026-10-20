import type { Metadata } from "next";
import ActivateForm from "@/app/components/auth/ActivateForm";

export const metadata: Metadata = {
  title: "Activar cuenta — OpenDayCare",
};

export default function ActivatePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FBF4EC",
        padding: "40px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "440px" }}>
        <div
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "18px",
            background: "linear-gradient(155deg,#F8C3A8,#F2937A)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "22px",
            boxShadow: "0 12px 26px -10px rgba(238,129,100,.65)",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </div>
        <h1 style={{ fontFamily: "'Fredoka'", fontWeight: 600, fontSize: "32px", lineHeight: "1.15", margin: "0 0 8px", color: "#3F362E" }}>
          Bienvenida a OpenDayCare
        </h1>
        <p style={{ margin: "0 0 26px", color: "#94887B", fontSize: "15.5px", lineHeight: "1.55" }}>
          Te invitaron a seguir el día de tu hijo. Creá tu contraseña para activar la cuenta.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "14px", background: "#fff", border: "1.5px solid #EADFD0", borderRadius: "16px", padding: "14px 16px", marginBottom: "22px" }}>
          <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#A9D9E8", color: "#1F7A93", fontFamily: "'Fredoka'", fontWeight: 600, fontSize: "19px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            M
          </div>
          <div>
            <div style={{ fontSize: "13px", color: "#94887B" }}>Te invitaron a seguir a</div>
            <div style={{ fontFamily: "'Fredoka'", fontWeight: 600, fontSize: "17px", color: "#3F362E" }}>Mateo · Sala Soles</div>
          </div>
        </div>

        <ActivateForm />
      </div>
    </div>
  );
}