"use client"

import { useAuth } from "../hooks/useAuth"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function RoleGuard({ children, allowedRoles = [], fallbackPath = "/" }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-rose-500"></div>
      </div>
    )
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <CardTitle className="text-2xl">Access Denied</CardTitle>
                <CardDescription>
                  You don't have permission to access this page. Please contact support if you believe this is an error.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Required role: {allowedRoles.join(" or ")}</p>
                  <p className="text-sm text-gray-600 mb-4">Your role: {user?.role || "Not authenticated"}</p>
                </div>
                <Button asChild className="w-full bg-rose-500 hover:bg-rose-600">
                  <Link href={fallbackPath}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return children
}
