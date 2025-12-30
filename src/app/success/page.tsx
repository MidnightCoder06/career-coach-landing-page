"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-20 w-20 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! We've received your payment and you'll receive a confirmation email shortly.
        </p>
        
        {sessionId && (
          <p className="text-sm text-gray-500 mb-6">
            Session ID: {sessionId}
          </p>
        )}
        
        <div className="space-y-3">
          <Button
            onClick={() => window.location.href = "/"}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
            size="lg"
          >
            Return to Home
          </Button>
          
          <p className="text-sm text-gray-500">
            You'll receive an email with next steps shortly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}

