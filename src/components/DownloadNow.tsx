import { useEffect, useMemo, useRef, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type DownloadVariant = "installer" | "portable";
type DownloadState = "idle" | "verifying" | "started";

interface DownloadNowProps {
  installerUrl?: string;
  portableUrl?: string;
  installerSize?: string;
  portableZipSize?: string;
  portableUnzippedSize?: string;
}

const DownloadNow = ({
  installerUrl,
  portableUrl,
  installerSize,
  portableZipSize,
  portableUnzippedSize,
}: DownloadNowProps) => {
  const [variant, setVariant] = useState<DownloadVariant>("installer");
  const [state, setState] = useState<DownloadState>("idle");
  const [progress, setProgress] = useState(0);
  const [runId, setRunId] = useState(0);
  const redirectTimeoutRef = useRef<number | null>(null);

  const url = useMemo(() => {
    return variant === "installer" ? installerUrl : portableUrl;
  }, [installerUrl, portableUrl, variant]);

  useEffect(() => {
    if (state !== "verifying") return;

    if (redirectTimeoutRef.current) {
      window.clearTimeout(redirectTimeoutRef.current);
      redirectTimeoutRef.current = null;
    }

    setProgress(0);

    const startedAt = Date.now();
    const durationMs = 3200;

    const id = window.setInterval(() => {
      const t = Math.min(1, (Date.now() - startedAt) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.min(100, Math.round(eased * 100));
      setProgress(next);

      if (t >= 1) {
        window.clearInterval(id);
        setProgress(100);
        setState("started");
        redirectTimeoutRef.current = window.setTimeout(() => {
          if (url) window.location.assign(url);
          redirectTimeoutRef.current = null;
        }, 250);
      }
    }, 80);

    return () => window.clearInterval(id);
  }, [runId, state, url]);

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current);
        redirectTimeoutRef.current = null;
      }
    };
  }, []);

  const statusText =
    state === "verifying"
      ? `Verifying… ${progress}%`
      : state === "started"
        ? "Download started"
        : url
          ? "Click download to start"
          : "No download URL set yet";

  const storageText =
    variant === "installer"
      ? installerSize
        ? `Installer size: ${installerSize}`
        : undefined
      : portableZipSize || portableUnzippedSize
        ? `Portable zip: ${portableZipSize ?? "—"} · Unzipped: ${portableUnzippedSize ?? "—"}`
        : undefined;

  return (
    <section className="mt-10 rounded-2xl border border-border bg-card/60 p-6 text-left dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground dark:text-white/90">Download now</h2>
          <p className="mt-1 text-sm text-muted-foreground dark:text-white/60">Choose an installer or a portable build.</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant={variant === "installer" ? "default" : "outline"}
            className={variant === "installer" ? "" : "bg-background/60"}
            onClick={() => setVariant("installer")}
          >
            Installer
          </Button>
          <Button
            type="button"
            variant={variant === "portable" ? "default" : "outline"}
            className={variant === "portable" ? "" : "bg-background/60"}
            onClick={() => setVariant("portable")}
          >
            Portable
          </Button>
        </div>
      </div>

      {storageText && (
        <p className="mt-4 text-sm text-muted-foreground dark:text-white/60">{storageText}</p>
      )}

      <div className="mt-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground dark:text-white/60">{statusText}</p>
          <Button
            type="button"
            onClick={() => {
              if (!url) return;
              setState("verifying");
              setRunId((x) => x + 1);
            }}
            disabled={!url}
          >
            <Download />
            Download
          </Button>
        </div>

        <div className="mt-4">
          <Progress value={state === "idle" ? 0 : progress} />
        </div>
      </div>
    </section>
  );
};

export default DownloadNow;
