import { Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Button } from "~/components/ui/button";

export function ChatInterface() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Chat with Your Data</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                Hello! I&apos;ve analyzed your genome dataset. What would you
                like to know?
              </div>
            </div>
            <div className="flex items-start justify-end space-x-4">
              <div className="bg-muted rounded-lg p-2">
                Can you tell me about any notable genetic markers?
              </div>
            </div>
            {/* Add more messages as needed */}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full items-center space-x-2">
          <Input className="flex-1" placeholder="Type your message..." />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
