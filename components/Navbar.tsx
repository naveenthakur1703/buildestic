import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/android-chrome-512x512.png"
            alt="Buildestic Logo"
            width={42}
            height={42}
            priority
          />

          <div>
            <div className="text-xl font-bold">Buildestic</div>
            <div className="text-xs text-slate-500">
              Construction Calculators
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/brick-calculator">Brick</Link>
          <Link href="/concrete-calculator">Concrete</Link>
        </nav>
      </div>
    </header>
  );
}