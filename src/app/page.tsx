import { redirect } from "next/navigation";

export default function Home() {
  redirect("/signup"); // Immediately redirects on the server

  return null; // Ensures nothing is rendered
}
