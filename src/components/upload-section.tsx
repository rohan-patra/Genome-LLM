import { Upload, Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function UploadSection() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Upload Dataset</CardTitle>
        <CardDescription>Upload a dataset to ingest</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center justify-center">
          <label
            htmlFor="dropzone-file"
            className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <Upload className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Recommended file types: .csv, .tsv, .json
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <Button className="mt-4 w-full">
          Upload Data
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
