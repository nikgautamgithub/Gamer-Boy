import { Schema, model, models } from "mongoose";

const gameSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    gameName: {
        type: String,
        required: [true, "Game Name is required"]
    },
    game: {
        type: String,
        required: [true, "Game Info is required"]
    },
    tag: {
        type: String,
        required: [true, "Tag is required"]
    },
});

const Game = models.game || model('game', gameSchema);

export default Game;