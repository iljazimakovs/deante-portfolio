import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Portfolio } from "@/components/sections/Portfolio";
import { Industries } from "@/components/sections/Industries";

import { Footer } from "@/components/sections/Footer";

export default function Home({ projectSlug, categorySlug, recommendedIds }: { projectSlug?: string; categorySlug?: string; recommendedIds?: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Services />
        <Skills />
        <Portfolio initialSlug={projectSlug} initialCategory={categorySlug} initialRecommendedIds={recommendedIds} />
        <Industries />

      </main>

      <Footer />
    </div>
  );
}
