// /** @jsxImportSource next/client */
"use client"

import "@magiclabs/ui/dist/cjs/index.css";
import HomePage from "@/components/homepage";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header>
        <main className="flex flex-col items-center px-4 sm:px-0 min-h-screen">
          <HomePage />
        </main>
      </Header>
    </>
  );
}
