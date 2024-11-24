'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 7000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-200 to-blue-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Thank You!</h2>
        <p className="mt-2 text-sm text-gray-600">
          Your message has been successfully submitted. We'll get back to you soon.
        </p>
        <p className="mt-4 text-sm text-blue-600">
          You'll be redirected to the home page in 7 seconds...
        </p>
      </div>
    </div>
  );
}

