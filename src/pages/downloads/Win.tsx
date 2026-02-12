import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadNow from "@/components/DownloadNow";

const Win = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-28 pb-20 px-6 flex-1">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-white/90">
            Download for Windows
          </h1>
          <p className="mt-4 text-muted-foreground dark:text-white/60">
            Add your actual Windows download link here.
          </p>

          <DownloadNow
            installerUrl="https://github.com/updaown-hecker/Blynx-Browser/releases/download/beta_windows/Blynx.Setup.1.0.0.exe"
            portableUrl="https://github.com/updaown-hecker/Blynx-Browser/releases/download/beta_windows/windows-portable.zip"
            installerSize="356 MB"
            portableZipSize="408 MB"
            portableUnzippedSize="711 MB"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Win;
