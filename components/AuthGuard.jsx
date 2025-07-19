"use client"

import { useAuth } from "../hooks/useAuth"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Heart, Lock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AuthGuard({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-rose-500"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-rose-500" />
              <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-rose-500" />
                </div>
                <CardTitle className="text-2xl">Sign In Required</CardTitle>
                <CardDescription>
                  Please sign in to access the booking system and plan your perfect wedding
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button asChild className="bg-rose-500 hover:bg-rose-600">
                    <Link href="/auth/signin">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/auth/signup">
                      Create Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    New to ShadiKam? Join thousands of couples planning their perfect day
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span>✓ Free to use</span>
                    <span>✓ Verified vendors</span>
                    <span>✓ Secure booking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return children
}
