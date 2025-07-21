// This is going to check for authentication & for the existing store
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  // Destructure and await params
  const { storeId } = await params;

  // Fetch the authenticated user's ID
  const { userId } = await auth();

  // If no user ID, redirect to sign-in
  if (!userId) {
    redirect("/sign-in");
  }

  // Fetch the store for the given user and store ID
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  // If no store is found, redirect to home
  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
