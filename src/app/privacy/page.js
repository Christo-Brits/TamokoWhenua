'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PrivacyRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the privacy policy page
    router.replace('/legal/privacy-policy');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg">Redirecting to Privacy Policy...</p>
      </div>
    </div>
  );
}
