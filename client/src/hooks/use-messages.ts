import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput, type MessageResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCreateMessage() {
  const { toast } = useToast();

  return useMutation<MessageResponse, Error, MessageInput>({
    mutationFn: async (data: MessageInput) => {
      const validated = api.messages.create.input.parse(data);
      
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          const error = api.messages.create.responses[400].parse(errorData);
          throw new Error(error.message);
        }
        if (res.status === 500) {
          const errorData = await res.json();
          const error = api.messages.create.responses[500].parse(errorData);
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }

      return api.messages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Transmitted",
        description: "Your message has been securely sent. I'll respond shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });
}
