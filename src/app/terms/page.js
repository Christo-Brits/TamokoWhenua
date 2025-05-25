'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TermsRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the terms of service page
    router.replace('/legal/terms-of-service');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg">Redirecting to Terms of Service...</p>
      </div>
    </div>
  );
}
