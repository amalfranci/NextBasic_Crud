import DbCon from "@/libs/mongodb"
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function POST (request){
    const {title ,description} = await request.json()
    await DbCon();
    await Topic.create({title,description})
    return NextResponse.json({message:"topic created"},{status:201})

}

export async function GET() {
    await DbCon()
    const topics = await Topic.find();

    return NextResponse.json({topics})
}

export async function DELETE(request) {
 const id= request.nextUrl.searchParams.get("id");
 await DbCon()   
 await Topic.findByIdAndDelete(id)
 return NextResponse.json({message:"Topic Deleted Successfully"},{status:200})
}