import { Appbar } from "@/components/Appbar";
import { NextTask } from "@/components/NextTask";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-violet-300">
      <Appbar />
      <NextTask />
    </div>
  );
}
