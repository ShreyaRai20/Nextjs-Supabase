'use client'
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();
    const reload = () => {
        startTransition(()=> {
            router.refresh();
            reset();
        })
    }
  return (
    <div key={error.message} className="flex flex-col items-center justify-center text-white p-4">
      <p className="mb-4">{error.message}</p>
      <button
        className="text-white bg-pink-500 border-2 border-white px-4 py-2 rounded cursor-pointer hover:bg-pink-600"
        onClick={() => reload()}
      >
        Try Again
      </button>
    </div>
  );
}
