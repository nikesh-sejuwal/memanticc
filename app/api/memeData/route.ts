import MemeModel from "@/lib/models/meme.model";
import mongoose from "mongoose";

export async function POST(req: Request) {
   const data = await req.json();
   await mongoose.connect(process.env.MONGODB_URL!);
   try {
      const memeData = await MemeModel.create({
         userId: data.userId,
         caption: data.caption,
         memeUrl: data.memeUrl,
      });
      console.log(memeData);
      return new Response(JSON.stringify(memeData), { status: 201 });
   } catch (error: any) {
      return new Response(`Failed to add user data: ${error.message}`, {
         status: 500,
      });
   }
}

export async function GET() {
   await mongoose.connect(`${process.env.MONGODB_URL!}`);
   const getData = await MemeModel.find();
   if (getData) {
      return new Response(JSON.stringify(getData));
   } else {
      return new Response(JSON.stringify("no data in the server"));
   }
}
