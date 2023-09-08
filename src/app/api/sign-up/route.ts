import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Get data submitted in request's form.
  const form = await req.formData();

  const formData = Object.fromEntries(form.entries());

  // Optional logging to see the responses in the command line where the
  // Next.js app is running.

  // Guard clause checks for email and returns early if it is not found.
  if (!formData.email) {
    // Sends a HTTP bad request error code.
    return NextResponse.json(
      {
        message: "Email not found",
      },
      {
        status: 400,
      }
    );
  }
  // Here, you could send the email address to a service like Mailchimp to
  // manage your mailing list.
  //
  // This is just an example, so we won't do anything except redirect back to
  // the homepage.
  return new Response("Homepage redirect", {
    status: 302,
    headers: { Location: "/" },
  });
}
