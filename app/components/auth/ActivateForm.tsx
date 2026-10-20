"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ActivateForm() {
  const router = useRouter();
  const [code, setCode] = useState("7K4P9");
  const [email, setEmail] = useState("lucia.fernandez@gmail.com");
  const [password, setPassword] = useState("contraseña");
  const [photoConsent, setPhotoConsent] = useState(true);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!photoConsent) return;
        router.push("/");
      }}
      style={{ display: "flex", flexDirection: "column", gap: "18px" }}
    >
      <div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: ".7px",
            color: "#94887B",
            marginBottom: "8px",
          }}
        >
          CÓDIGO DE INVITACIÓN
        </div>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: "14px",
            border: "1.5px solid #EADFD0",
            background: "#fff",
            fontSize: "18px",
            letterSpacing: "3px",
            fontWeight: 700,
            color: "#3F362E",
            fontFamily: "'Fredoka'",
          }}
        />
      </div>

      <div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: ".7px",
            color: "#94887B",
            marginBottom: "8px",
          }}
        >
          EMAIL
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: "14px",
            border: "1.5px solid #EADFD0",
            background: "#fff",
            fontSize: "15px",
            color: "#3F362E",
          }}
        />
      </div>

      <div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: ".7px",
            color: "#94887B",
            marginBottom: "8px",
          }}
        >
          CREAR CONTRASEÑA
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: "14px",
            border: "1.5px solid #F2A78E",
            background: "#fff",
            fontSize: "15px",
            color: "#3F362E",
          }}
        />
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          background: "#FBF1D6",
          borderRadius: "14px",
          padding: "14px 16px",
          marginBottom: "24px",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={photoConsent}
          onChange={(e) => setPhotoConsent(e.target.checked)}
          style={{ display: "none" }}
        />
        <span
          style={{
            flex: "none",
            width: "24px",
            height: "24px",
            borderRadius: "8px",
            background: photoConsent ? "#5FB97E" : "#E7DAC8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1px",
          }}
        >
          {photoConsent && (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
        <span style={{ fontSize: "14px", color: "#8A7234", lineHeight: "1.45" }}>
          Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de la app.
        </span>
      </label>

      <button
        type="submit"
        disabled={!photoConsent}
        style={{
          display: "block",
          textAlign: "center",
          width: "100%",
          padding: "15px",
          borderRadius: "15px",
          background: "linear-gradient(180deg,#F4977E,#EE8164)",
          color: "#fff",
          fontWeight: 800,
          fontSize: "16px",
          cursor: photoConsent ? "pointer" : "not-allowed",
          boxShadow: "0 10px 22px -8px rgba(238,129,100,.7)",
        }}
      >
        Activar mi cuenta
      </button>

      <p
        style={{
          textAlign: "center",
          margin: "22px 0 0",
          color: "#94887B",
          fontSize: "14.5px",
        }}
      >
        ¿Ya tenés cuenta?{" "}
        <a
          href="/login"
          style={{ color: "#C5503A", fontWeight: 800 }}
        >
          Iniciar sesión
        </a>
      </p>
    </form>
  );
}