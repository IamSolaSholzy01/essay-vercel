"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push("/apply");
  }, []);
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      Civil Conference
    </section>
  );
}
