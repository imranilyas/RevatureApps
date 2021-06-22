import { GetCommand, PutCommand, ScanCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../libs/ddbDocClient.js";
import MonsterDrops from "../model/MonsterDrops.js";
const TABLE_NAME = "genshin-drops";

export const getItem = async (monDrop: MonsterDrops) => {
    // Set the parameters.
        const params = {
            TableName: TABLE_NAME,
            Key: {
                name: monDrop.name,
            },
        };
        try {
            const data = await ddbDocClient.send(new GetCommand(params));
            console.log("Success :", data.Item);
            let mons = [];
            let count = 0;
            for(const i of data.Item.monster){
                mons[count] = i;
                count++;
            }
            let MD = new MonsterDrops(data.Item.name, data.Item.generalName, mons, data.Item.dropRate, data.Item.minWorldRank, data.Item.rarity);
            return MD;
        }catch (err) {
            console.log("Error", err);
        }
};

//getItem();