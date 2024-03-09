import { SignUp } from "@clerk/nextjs";

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}

export default page