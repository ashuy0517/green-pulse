import type { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login | GreenPulse",
  description: "Login to your GreenPulse account",
}

export default function LoginPage() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center px-4 md:px-6">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login to GreenPulse</h1>
          <p className="text-gray-500">Enter your credentials to access your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
