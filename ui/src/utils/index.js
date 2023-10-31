import {Buffer} from "buffer";

export function stringToFelt(str) {
    return "0x" + Buffer.from(str).toString("hex");
}

export const getRandomNumber = (to) => {
    return (Math.floor(Math.random() * to) + 1).toString();
};


export function getKeyFromValue(
    data,
    value
) {
    for (const key in data) {
        if (data[key] === value) {
            return key;
        }
    }
    return null;
}

export function convertToBoolean(value) {
    return value === 1;
}

export function getRandomNumberIn(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFloatIn(min, max, decimals) {
    const randomFloat = Math.random() * (max - min) + min;
    return parseFloat(randomFloat.toFixed(decimals));
}

export function roundFloatToInt(floatNum) {
    return Math.round(floatNum);
}


export function getCurrentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    return currentTime;
}

export function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
        const nextChunk = array?.slice(i, i + chunkSize);
        chunks.push(nextChunk);
        if (nextChunk.length < chunkSize) break; // Stop if we've hit the end of the array
    }
    return chunks;
}

// 示例用法
export function formatAdventurerState(adventurer, adventurerState) {

    // beastHealth
    //     :
    //     5
    // chest
    //     :
    // {id: 0, xp: 0, metadata: 0}
    // foot
    //     :
    // {id: 0, xp: 0, metadata: 0}
    // gold
    //     :
    //     25
    // hand
    //     :
    // {id: 0, xp: 0, metadata: 0}
    // head
    //     :
    // {id: 0, xp: 0, metadata: 0}
    // health
    //     :
    //     130
    // lastAction
    //     :
    //     487
    // mutated
    //     :
    //     false
    // neck
    //     :
    // {id: 0, xp: 0, metadata: 0}
    // ring
    //     :
    // {id: 0, xp: 0, metadata: 0}
    // statPointsAvailable
    //     :
    //     0
    // stats
    //     :
    // {strength: 5, dexterity: 10, vitality: 3, intelligence: 2, wisdom: 12, …}
    // waist
    //     :
    // {id: 0, xp: 0, metadata: 0}
    // weapon
    //     :
    // {id: 16, xp: 0, metadata: 1}
    // xp
    //     :
    //     0

    adventurer.beastHealth = adventurerState.adventurer.beastHealth;

    adventurer.health = adventurerState.adventurer.health;
    adventurer.lastAction = adventurerState.adventurer.lastAction;
    adventurer.mutated = adventurerState.adventurer.mutated;
    adventurer.statUpgrades = adventurerState.adventurer.statPointsAvailable;
    adventurer.xp = adventurerState.adventurer.xp;
    adventurer.gold = adventurerState.adventurer.gold;

    adventurer.head = adventurerState.adventurer.head;
    adventurer.chest = adventurerState.adventurer.chest;
    adventurer.waist = adventurerState.adventurer.waist;
    adventurer.foot = adventurerState.adventurer.foot;
    adventurer.neck = adventurerState.adventurer.neck;
    adventurer.ring = adventurerState.adventurer.ring;
    adventurer.weapon = adventurerState.adventurer.weapon;
    adventurer.hand = adventurerState.adventurer.hand;


    adventurer.charisma = adventurerState.adventurer.stats.charisma;
    adventurer.dexterity = adventurerState.adventurer.stats.dexterity;
    adventurer.intelligence = adventurerState.adventurer.stats.intelligence;
    adventurer.strength = adventurerState.adventurer.stats.strength;
    adventurer.vitality = adventurerState.adventurer.stats.vitality;
    adventurer.wisdom = adventurerState.adventurer.stats.wisdom;


    return adventurer;
}

export const playClickSound = () => {
    var sound = new Audio('music/ui/21 - Track 21.mp3'); // 替换为您的音效文件路径
    sound.play();
    // function playSound() {
    //     sound.play();
    // }
    //
    // var button = document.querySelector('button');
    // button.addEventListener('click', playSound);
}