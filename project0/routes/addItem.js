import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../libs/ddbDocClient.js";
import MonsterDrops from "../model/MonsterDrops.js";
const TABLE_NAME = "genshin-drops";
//add 1 item to the table
export const addItem = async (monDrop) => {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            name: monDrop.name,
            generalName: monDrop.generalName,
            monster: monDrop.monster,
            dropRate: monDrop.dropRate,
            minWorldRank: monDrop.minWorldRank,
            rarity: monDrop.rarity
        },
    };
    try {
        const data = await ddbDocClient.put(new PutCommand(params));
        console.log(data);
        /*console.log("Success - item added or updated", data);
        let mons = [];
        let count = 0;
        for (const i of data.Item.monster) {
            mons[count] = i;
            count++;
        }
        let MD = new MonsterDrops(data.Item.name, data.Item.generalName, mons, data.Item.dropRate, data.Item.minWorldRank, data.Item.rarity);
        return MD;
        */
    }
    catch (err) {
        console.log("Error", err);
    }
};
