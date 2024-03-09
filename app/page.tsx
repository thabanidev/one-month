import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen text-center flex-col items-center justify-center gap-6 p-10 md:p-24">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={280}
        height={280}
      />
      <p className="text-primary text-xl font-semibold md:text-2xl">
        A monthly budgeting app, and birthday present for my mom.  
      </p>
      <Link href="/sign-in">
        <Button className="bg-primary text-xl p-8 font-black" >Get Started</ Button>
      </Link>
    </main>
  );
}
