import { connectToMongoDB } from "@utils/database";
import Game from "@models/game";

export const GET = async (req,res) => {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const search = searchParams.get('search') || '';
    const regex = new RegExp(search, "i");
    try {
        await connectToMongoDB();

        const posts = await Game.find({game:{$regex: regex}}).populate("creator");

        const headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate',
            Expires: 0,
            Pragma: 'no-cache'  
        };

        return new Response(JSON.stringify(posts), { status: 200 ,headers});
    } catch (error) {
        return new Response("Failed to fetch posts", { status: 500 });
    }
};