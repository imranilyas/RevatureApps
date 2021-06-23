import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../libs/ddbDocClient.js";
import MonsterDrops from "../model/MonsterDrops.js";
const TABLE_NAME = "genshin-drops";
//add 1 item to the table
export const addItem = async (monDrop) => {
    let objectDrop = monDrop.objectDrop();
    const params = {
        TableName: TABLE_NAME,
        Item: objectDrop,
    };
    try {
        return await ddbDocClient.send(new PutCommand(params));
    }
    catch (err) {
        console.log("Error", err);
    }
};
