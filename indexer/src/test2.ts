import {
    ADVENTURER_DIED,
    ADVENTURER_UPGRADED,
    AMBUSHED_BY_BEAST,
    ATTACKED_BEAST,
    ATTACKED_BY_BEAST,
    DISCOVERED_BEAST,
    DISCOVERED_GOLD,
    DISCOVERED_HEALTH,
    DISCOVERED_XP,
    DODGED_OBSTACLE,
    DROPPED_ITEMS,
    EQUIPPED_ITEMS,
    FLEE_FAILED,
    FLEE_SUCCEEDED,
    HIT_BY_OBSTACLE, ITEMS_LEVELED_UP,
    NEW_HIGH_SCORE, NEW_ITEMS_AVAILABLE,
    PURCHASED_ITEMS,
    PURCHASED_POTIONS,
    REWARD_DISTRIBUTION,
    SLAYED_BEAST,
    START_GAME
} from "./utils/events.ts";

const GAME = Deno.env.get("GAME");
const START = +(Deno.env.get("START") || 0);


const filter = {
    header: { },
    events: [

    ],
};
console.log(START);
console.log(filter)
export const config = {
    streamUrl: "https://goerli.starknet.a5a.ch",
    filter,
    startingBlock: START,
    // startingBlock: 800_000,
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