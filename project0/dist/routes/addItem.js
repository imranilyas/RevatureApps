"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const ddbDocClient_js_1 = require("../libs/ddbDocClient.js");
const MonsterDrops_js_1 = require("../model/MonsterDrops.js");
const TABLE_NAME = "genshin-drops";
//add 1 item to the table
const addItem = async (monDrop) => {
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
        const data = await ddbDocClient_js_1.ddbDocClient.put(new lib_dynamodb_1.PutCommand(params));
        console.log("Success - item added or updated", data);
        let mons = [];
        let count = 0;
        for (const i of data.Item.monster) {
            mons[count] = i;
            count++;
        }
        let MD = new MonsterDrops_js_1.default(data.Item.name, data.Item.generalName, mons, data.Item.dropRate, data.Item.minWorldRank, data.Item.rarity);
        //return MD;
    }
    catch (err) {
        console.log("Error", err);
    }
};
exports.addItem = addItem;
