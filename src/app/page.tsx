import { Navbar } from "@/components/layout/Navbar";
import { HeroRunway } from "@/components/sections/HeroRunway";
import { LookbookGallery } from "@/components/sections/LookbookGallery";
import { DesignerManifesto } from "@/components/sections/DesignerManifesto";
import { BespokeWizard } from "@/components/sections/BespokeWizard";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-obsidian text-ivory antialiased selection:bg-gold/30">
      <Navbar />
      <main>
        <HeroRunway />
        <LookbookGallery />
        <DesignerManifesto />
        <BespokeWizard />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
