import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-faint">
          Built with Next.js &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
