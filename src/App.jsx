import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";
import { Toaster } from "react-hot-toast";


function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log(authUser);

  if (isCheckingAuth) return <PageLoader />

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

      <Routes>
        <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
      </Routes>
    </div>
  )
}

export default App;