import prisma from "@/lib/db";
import { NextRequest } from "next/server";
import { isEmail } from "class-validator";
interface Application {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  street: string;
  bio?: string;
  school: string;
  state: string;
  city: string;
  department: string;
  level: string;
  title: string;
  summary: string;
  comments?: string;
}
export async function POST(request: NextRequest) {
  const body: Application = await request.json();
  if (!body) {
    return Response.json({ message: "No body provided", success: false });
  }
  if (!body.email) {
    return Response.json({ message: "No email provided", success: false });
  }
  if (!isEmail(body.email)) {
    return Response.json({ message: "Invalid email provided", success: false });
  }

  try {
    const message = await prisma.application
      .create({
        data: {
          ...body,
        },
      })
      .then((r) => {
        return {
          message: "Your application has been received. Thank you!",
          success: true,
        };
      });
    return Response.json(message);
  } catch (error) {
    return Response.json({
      message: "An error occurred",
      error,
      success: false,
    });
  }
}
