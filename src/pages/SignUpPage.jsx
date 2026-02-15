import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useNavigate } from 'react-router'
import { Eye, EyeOff, Mail, User, Lock, Loader2 } from 'lucide-react'

function SignUpPage() {
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)
    const { signup, isSigningUp } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(formData)
    }

    return (
        <div className="w-full max-w-md relative z-10">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/60 p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-4">
                        <User className="w-7 h-7 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800 mb-2">계정 만들기</h1>
                    <p className="text-slate-500 text-sm">새로운 계정을 생성하세요</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            이름
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="홍길동"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-slate-800 placeholder:text-slate-400"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            이메일
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-slate-800 placeholder:text-slate-400"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            비밀번호
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-slate-800 placeholder:text-slate-400"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSigningUp}
                        className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSigningUp ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                계정 생성 중...
                            </>
                        ) : (
                            "회원가입"
                        )}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-600">
                        이미 계정이 있으신가요?{" "}
                        <button
                            onClick={() => navigate('/login')}
                            className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors cursor-pointer bg-transparent border-none underline"
                        >
                            로그인
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage