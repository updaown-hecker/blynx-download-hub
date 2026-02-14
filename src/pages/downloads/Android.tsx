import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadNow from "@/components/DownloadNow";

const Android = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-28 pb-20 px-6 flex-1">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-white/90">
            Download for Android
          </h1>
          <p className="mt-4 text-muted-foreground dark:text-white/60">
            Choose a Release APK for normal usage, or Debug APK for testing.
          </p>

          <DownloadNow
            installerLabel="Release"
            portableLabel="Debug"
            installerUrl="https://github.com/updaown-hecker/Blynx-Browser-Mobile/releases/download/Prerelease/Blynx.-.Release.apk"
            portableUrl="https://github.com/updaown-hecker/Blynx-Browser-Mobile/releases/download/Prerelease/Blynx.-.debug.apk"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Android;
