import CodexSectionMobile from "@/components/features/CodexSectionMobile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codex Mobile | Nikita Quazi",
  description: "Nikita Quazi's design and development skillset and tools",
};

export default function CodexMobilePage() {
  return (
    <main>
      <header className="w-full bg-[#DCEBFF] pt-24 flex justify-center">
        <h1 className="text-[32px] font-ubuntu-sans font-extrabold leading-[1.2] text-[#1B1B3E]" />
      </header>
      <CodexSectionMobile />
    </main>
  );
}
