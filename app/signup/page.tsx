import type { Metadata } from "next"
import { SignupForm } from "@/components/auth/signup-form"

export const metadata: Metadata = {
  title: "Sign Up | GreenPulse",
  description: "Create a new GreenPulse account",
}

export default function SignupPage() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center px-4 md:px-6">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-500">Join GreenPulse and start your reforestation journey</p>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
