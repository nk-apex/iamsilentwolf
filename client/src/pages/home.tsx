import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
      <ChatWidget />
    </div>
  );
}
