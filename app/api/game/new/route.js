import { connectToMongoDB } from "@utils/database";
import Game from "@models/game";

export const POST = async (req, res, next) => {
    const { gameName, game, userId, tag } = await req.json();
    // console.log(gameName, game, tag, "route.js");
    try {
        await connectToMongoDB();
        Game.create({
            creator: userId,
            gameName,
            game,
            tag
        });

        return new Response({ status: 201 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to add new game", { status: 500 });
    }
};