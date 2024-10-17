"use client";

import { useState } from "react";
import { UploadSection } from "~/components/upload-section";
import { ChatInterface } from "~/components/chat-interface";

export default function Home() {
  const [filePath, setFilePath] = useState<string | null>(null);

  const handleFilePathSubmit = (path: string) => {
    setFilePath(path);
  };

  const handleSendMessage = async (message: string): Promise<string> => {
    try {
      const response = await fetch("/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_path: filePath,
          action: "vss",
          prompt: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process message");
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      return data.result;
    } catch (error) {
      console.error("Error processing message:", error);
      return "Sorry, there was an error processing your message.";
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {!filePath ? (
        <UploadSection onFilePathSubmit={handleFilePathSubmit} />
      ) : (
        <ChatInterface filePath={filePath} onSendMessage={handleSendMessage} />
      )}
    </main>
  );
}
