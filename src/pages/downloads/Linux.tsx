import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Linux = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-28 pb-20 px-6 flex-1">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-white/90">
            Download for Linux
          </h1>
          <p className="mt-4 text-muted-foreground dark:text-white/60">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Linux;
