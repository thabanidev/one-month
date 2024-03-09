import { SignIn } from "@clerk/nextjs"

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-2xl">
      <SignIn path="/sign-in" routing="path" />
    </div >
  );
}

export default page