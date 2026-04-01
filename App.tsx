import { useState } from "react";
import TelaLogin from "./src/TelaLogin";
import TelaRegistro from "./src/TelaRegistro";
import TelaRecuperarSenha from "./src/TelaRecuperarSenha";

export default function App() {
  const [screen, setScreen] = useState("login");

  if (screen === "login") {
    return <TelaLogin setScreen={setScreen} />;
  } else if (screen === "registro") {
    return <TelaRegistro setScreen={setScreen} />;
  } else if (screen === "recuperarSenha") {
    return <TelaRecuperarSenha setScreen={setScreen} />;
  }
}
