'use client'
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/navbar";
import TableContent from "./components/TableContent";


export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-full">
        <Navbar/>
        <TableContent/>
      </main>
    </NextUIProvider>
  );
}
