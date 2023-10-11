import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.data.findMany();
    return NextResponse.json({data: data ,message:"API berjalan sukses"},{status: 200})
  } catch (error) {
    return NextResponse.json({message:"Error"},{status:500})
  }
}
