import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}