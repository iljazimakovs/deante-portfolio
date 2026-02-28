import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Mail, MapPin } from "lucide-react";
import { useCreateMessage } from "@/hooks/use-messages";
import { api, type MessageInput } from "@shared/routes";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const mutation = useCreateMessage();
  
  const form = useForm<MessageInput>({
    resolver: zodResolver(api.messages.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: MessageInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Establish <span className="text-primary">Connection</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Available for contract work, consulting, and full-time opportunities. Send a message to initiate a secure handshake.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-mono uppercase tracking-wider text-primary/70">Email</p>
                  <p className="font-medium">contact@syseng.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-mono uppercase tracking-wider text-primary/70">Location</p>
                  <p className="font-medium">Remote / Global</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Identifier</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="bg-background border-border/50 focus-visible:ring-primary/30 h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Return Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com" 
                          className="bg-background border-border/50 focus-visible:ring-primary/30 h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Payload</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Project details or inquiry..." 
                          className="bg-background border-border/50 focus-visible:ring-primary/30 min-h-[150px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-12 font-mono text-sm tracking-wide group bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "TRANSMITTING..." : "TRANSMIT DATA"}
                  {!mutation.isPending && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
