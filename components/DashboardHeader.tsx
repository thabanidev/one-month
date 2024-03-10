import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#173d4c] text-white shadow-md rounded-md m-2">
      <Image src="/images/logo-white.png" alt="logo" width={50} height={50} />
        <UserButton afterSignOutUrl="/" />
    </header>
  )
}

export default DashboardHeader