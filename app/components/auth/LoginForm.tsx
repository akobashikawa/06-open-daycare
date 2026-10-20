"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("caro@opendaycare.com");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
          CONTRASEÑA
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
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

      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <span
          style={{
            color: "#C5503A",
            fontSize: "13.5px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          ¿Olvidaste tu contraseña?
        </span>
      </div>

      <button
        type="submit"
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
          cursor: "pointer",
          boxShadow: "0 10px 22px -8px rgba(238,129,100,.7)",
        }}
      >
        Iniciar sesión
      </button>

      <p
        style={{
          textAlign: "center",
          margin: "24px 0 0",
          color: "#94887B",
          fontSize: "14.5px",
        }}
      >
        ¿Te invitó la guardería?{" "}
        <a
          href="/activate"
          style={{ color: "#C5503A", fontWeight: 800 }}
        >
          Activá tu cuenta
        </a>
      </p>
    </form>
  );
}