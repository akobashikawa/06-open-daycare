import type { Metadata } from "next";
import LoginForm from "@/app/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Iniciar sesión — OpenDayCare",
};

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        background: "#FBF4EC",
        gridTemplateColumns: "1fr",
      }}
      className="lg:grid-cols-[1.05fr_1fr]"
    >
      {/* Panel izquierdo — marca */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(155deg,#F6A98E 0%,#F2937A 45%,#EC7E62 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 60px",
          color: "#fff",
        }}
        className="hidden lg:flex"
      >
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(255,255,255,.12)",
            top: "-140px",
            right: "-120px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,.10)",
            bottom: "-110px",
            left: "-80px",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "13px", position: "relative" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "14px",
              background: "rgba(255,255,255,.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Fredoka'", fontWeight: 600, fontSize: "21px", letterSpacing: ".5px" }}>
            OpenDayCare
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <h1 style={{ fontFamily: "'Fredoka'", fontWeight: 600, fontSize: "42px", lineHeight: "1.12", margin: "0 0 18px" }}>
            El día de cada niño,<br />compartido con su familia.
          </h1>
          <p style={{ fontSize: "17px", lineHeight: "1.6", margin: 0, maxWidth: "430px", color: "rgba(255,255,255,.92)" }}>
            Publicá momentos, gestioná las salas y mantené a las familias cerca, desde un solo lugar.
          </p>
        </div>
        <div style={{ position: "relative", fontSize: "14px", color: "rgba(255,255,255,.9)" }}>
          🌿 Guardería Sala Soles
        </div>
      </div>

      {/* Panel derecho — formulario (placeholder) */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "392px" }}>
          <h2 style={{ fontFamily: "'Fredoka'", fontWeight: 600, fontSize: "30px", margin: "0 0 6px", color: "#3F362E" }}>
            Iniciar sesión
          </h2>
          <p style={{ margin: "0 0 28px", color: "#94887B", fontSize: "15px" }}>Ingresá para ver el día de hoy.</p>

          {/* PLACEHOLDER — reemplazado en Step 2 por LoginForm */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}