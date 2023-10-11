import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.data.findMany({
      where:{
        type: "expense"
      }, 
      select:{
        id:true,
        title:true,
        category:true,
        amount:true
      }
    });
    return NextResponse.json({expense: data ,message:"Data Sukses"},{status: 200})
  } catch (error) {
    return NextResponse.json({message:"Error"},{status:500})
  }
}
