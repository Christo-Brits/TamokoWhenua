'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CookiesRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the cookies policy page
    router.replace('/legal/cookies-policy');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg">Redirecting to Cookies Policy...</p>
      </div>
    </div>
  );
}
