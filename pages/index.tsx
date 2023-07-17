"use client";
import { Suspense } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Suspense fallback={<p> loadig</p>}>
        <main
          className={`flex min-h-screen flex-col items-center justify-center ${inter.className} bg-black`}
        >
          <Image
            src="/logo.svg"
            alt="Styleguide logo"
            width={420}
            height={24}
            priority
          />
          <button
            className="btn text-white font-medium text-lg"
            onClick={() => {
              localStorage.setItem("splashStage", "1"), router.push("/splash");
            }}
          >
            Next {"->"}
          </button>
        </main>
      </Suspense>
    </Layout>
  );
}
