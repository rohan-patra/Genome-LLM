import { useState } from "react";
import { Upload, Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";

interface UploadSectionProps {
  onFilePathSubmit: (filePath: string) => void;
}

export function UploadSection({ onFilePathSubmit }: UploadSectionProps) {
  const [filePath, setFilePath] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilePathSubmit(filePath);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Enter File Path</CardTitle>
        <CardDescription>Provide the path to your TSV file</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter file path (e.g., /path/to/your/file.tsv)"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Submit File Path
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
