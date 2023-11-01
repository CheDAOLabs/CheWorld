import axios from "axios";

const url = "http://3.29.249.78:8080/goerli-graphql";

export const getAdventure = async (owner) => {

    console.log("owner", owner);

    let query = 'query MyQuery {\n' +
        '  adventurers(\n' +
        '    where: {owner: {eq: \"' + owner + '\"}}\n' +
        '    orderBy: {createdTime: {asc: false}}\n' +
        '  ) {\n' +
        '    charisma\n' +
        '    chest\n' +
        '    classType\n' +
        '    createdTime\n' +
        '    id\n' +
        '    dexterity\n' +
        '    foot\n' +
        '    gold\n' +
        '    hand\n' +
        '    head\n' +
        '    health\n' +
        '    homeRealm\n' +
        '    intelligence\n' +
        '    lastAction\n' +
        '    lastUpdatedTime\n' +
        '    name\n' +
        '    neck\n' +
        '    owner\n' +
        '    ring\n' +
        '    statUpgrades\n' +
        '    strength\n' +
        '    timestamp\n' +
        '    vitality\n' +
        '    waist\n' +
        '    weapon\n' +
        '    wisdom\n' +
        '    xp\n' +
        '    beastHealth\n' +
        '  }\n' +
        '}';

    let data = JSON.stringify({
        "query": query,
        "operationName": "MyQuery"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: {
            'content-type': 'application/json'
        },
        data: data
    };


    const resp = await axios.request(config);
    console.log('resp', resp)
    return resp.data;
}

export const getItemsByAdventureId = async (adventureId) => {
    let query = 'query MyQuery {\n' +
        '  items(where: {adventurerId: {eq: 1}}) {\n' +
        '    timestamp\n' +
        '    special3\n' +
        '    special2\n' +
        '    special1\n' +
        '    xp\n' +
        '    purchasedTime\n' +
        '    ownerAddress\n' +
        '    owner\n' +
        '    item\n' +
        '    isAvailable\n' +
        '    equipped\n' +
        '    adventurerId\n' +
        '  }\n' +
        '}';

    let data = JSON.stringify({
        "query": query,
        "operationName": "MyQuery"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: {
            'content-type': 'application/json'
        },
        data: data
    };


    const resp = await axios.request(config);
    console.log('resp', resp)
    return resp.data;
}