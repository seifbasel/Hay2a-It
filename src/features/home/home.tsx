"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const router = useRouter(); // ✅ Added Router for Navigation

  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Soldiers Card */}
          <div
            className="bg-card p-6 rounded-xl shadow-lg flex flex-col items-center w-60 hover:scale-105 transition cursor-pointer"
            onClick={() => router.push("/soldiers")}
          >
            <Image
              src="/soldier.png"
              alt="Soldiers"
              width={150}
              height={200}
              className="text-primary w-35 h-35"
            />
            <p className="mt-4 text-lg font-semibold">Soldiers</p>
          </div>

          {/* Officers Card */}
          <div className="bg-card p-6 rounded-xl shadow-lg flex flex-col items-center w-60 hover:scale-105 transition">
            <Image
              src="/officer.png"
              alt="Officers"
              width={150}
              height={200}
              className="text-primary w-35 h-35"
            />
            <p className="mt-4 text-lg font-semibold">Officers</p>
          </div>

          {/* Faults Card */}
          <div className="bg-card p-6 rounded-xl shadow-lg flex flex-col items-center w-60 hover:scale-105 transition">
            <Image
              src="/error.png"
              alt="Faults"
              width={150}
              height={200}
              className="text-primary w-35 h-35"
            />
            <p className="mt-4 text-lg font-semibold">Faults</p>
          </div>
        </div>
      </div>
    </div>
  );
}
