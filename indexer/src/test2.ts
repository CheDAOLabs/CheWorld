import {
    START_GAME
} from "./utils/events.ts";

const GAME = Deno.env.get("GAME");
const START = +(Deno.env.get("START") || 0);
const AUTH_TOKEN = "dna_Ph4f46VVexs9XUi0qVd6";

console.log(GAME);
console.log(START);

const filter = {
    header: { weak: false },
    events: [
        // { fromAddress: GAME, keys: [START_GAME] },
    ],
};

console.log(filter)
export const config = {
    streamUrl: "https://goerli.starknet.a5a.ch",
    token: AUTH_TOKEN,
    filter,
    // startingBlock: START,
    startingBlock: 894_413,
    network: "starknet",
    finality: "DATA_STATUS_ACCEPTED",
    sinkType: "console",
    sinkOptions: {},
    // filter: {
    //     header: {},
    // },
};

// This transform does nothing.
export default function transform(block) {
    return block;
}