import { connectToMongoDB } from "@utils/database";
import Game from "@models/game";

export const GET = async (req, res) => {
    try {
        await connectToMongoDB();

        const posts = await Game.find({}).populate("creator");

        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch posts", { status: 500 });
    }
}