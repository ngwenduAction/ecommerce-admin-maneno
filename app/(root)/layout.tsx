import { auth } from "@clerk/nextjs/server"; // Correct import for server-side use
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth(); // // Await the result of the auth() function

  if (!userId) {
    redirect("/sign-in"); // Redirect if the user is not signed in
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId, // Match the userId to find the store
    },
  });

  if (store) {
    redirect(`/${store.id}`); // Redirect to the store's ID if it exists
  }

  return <>{children}</>; // Render children if no store exists
}
