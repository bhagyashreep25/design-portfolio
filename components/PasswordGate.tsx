"use client";

import { useState } from "react";
import Image from "next/image";

interface PasswordGateProps {
  children: React.ReactNode;
  password: string;
}

export default function PasswordGate({ children, password }: PasswordGateProps) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === password) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-14">
      <Image
        src="/images/school-counselling/password-gate.gif"
        alt=""
        width={500}
        height={350}
        className="rounded-xl mb-12"
        unoptimized
      />

      <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] text-center mb-4">
        This project is{" "}
        <strong className="font-semibold text-[#8C63D1]">
          password protected
        </strong>
      </h1>

      <p className="text-base text-[#6b6b6b] text-center max-w-lg mb-1">
        If you&rsquo;re a recruiter or hiring manager, you can find the password on
        my resume. If not, then you can reach out to me at
      </p>
      <a
        href="mailto:bagsphadnis@gmail.com"
        className="text-base text-[#4c4c4c] underline hover:text-[#8C63D1] transition-colors mb-10"
      >
        bagsphadnis@gmail.com
      </a>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 w-full max-w-xs">
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Enter your password"
          className={`w-full px-4 py-3 border rounded-md text-base text-[#4c4c4c] placeholder-[#b0b0b0] outline-none transition-colors ${
            error ? "border-red-400" : "border-[#d0d0d0] focus:border-[#8C63D1]"
          }`}
        />
        {error && (
          <p className="text-sm text-red-500">Incorrect password. Try again.</p>
        )}
        <button
          type="submit"
          className="w-full bg-[#D2B9FA] text-[#4c4c4c] font-normal text-[18px] py-3 hover:bg-[#c4a6f5] transition-colors rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
