import DbCon from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {

    const {id}= params
    console.log("yto chrck id",id)
    const {newTitle:title,newDescription:description}= await request.json();
    await DbCon();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Topic Updated"},{status:200})
    
}
export async function GET(request, { params }) {
    const { id } = params;

    try {
        await DbCon();
        const topic = await Topic.findById(id); // Find by ID directly

        if (!topic) {
            return NextResponse.json({ error: "Topic not found" }, { status: 404 });
        }

        return NextResponse.json({ topic }, { status: 200 });
    } catch (error) {
        console.error("Error fetching topic:", error);
        return NextResponse.json({ error: "Failed to fetch topic" }, { status: 500 });
    }
}