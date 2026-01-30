import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <BackToTop />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}
