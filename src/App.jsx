import { Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";

function App() {

  const { authUser, isLoggedIn, login } = useAuthStore();

  console.log("auth user: ", authUser);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <div
      className="
        min-h-screen relative flex items-center justify-center p-4 overflow-hidden
        bg-gradient-to-br from-white via-slate-50 to-slate-100
      "
    >
      {/* soft color glow */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-indigo-300 opacity-20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-sky-300 opacity-20 blur-[140px] rounded-full" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-300 opacity-10 blur-[120px] rounded-full" />

      {/* light grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <button className="bg-blue-600 border-spacing-1 z-10" onClick={login}>
        login
      </button>

      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SignUpPage />} />
      </Routes>
    </div>
  )
}

export default App;