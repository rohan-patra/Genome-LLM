import { UploadSection } from "~/components/upload-section";
import { ChatInterface } from "~/components/chat-interface";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex w-full max-w-5xl flex-col items-center justify-between gap-8 font-mono text-sm">
        <h1 className="text-4xl font-bold">Genome Chat 💬</h1>
        <UploadSection />
        <ChatInterface />
      </div>
    </main>
  );
}
