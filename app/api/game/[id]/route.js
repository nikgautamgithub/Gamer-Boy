//GET (read)

import { connectToMongoDB } from "@utils/database";
import Game from "@models/game";

export const GET = async (req, { params }) => {
    try {
        await connectToMongoDB();

        const posts = await Game.findById(params.id).populate("creator");
        if (!posts) return new Response("Game not found", { status: 404 });

        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch posts", { status: 500 });
    }
}

//PATCH (update)

export const PATCH = async (req, { params }) => {
    const { gameName, game, tag } = await req.json();

    try {
        await connectToMongoDB();

        const existingGame = await Game.findById(params.id);

        if (!existingGame) return new Response("Game not found", { status: 404 });
        existingGame.gameName = gameName;
        existingGame.game = game;
        existingGame.tag = tag;

        await existingGame.save();

        return new Response(JSON.stringify(existingGame), { status: 200 });
    } catch (error) {
        return new Response("Failed to update game", { status: 500 });
    }
}

//DELETE (delete)

export const DELETE = async (req, { params }) => {
    try {
        await connectToMongoDB();

        await Game.findByIdAndRemove(params.id);

        return new Promise("Game deleted successfully!", { status: 200 });
    } catch (error) {
        return new Promise("Game cannot be deleted!", { status: 500 });
    }
}