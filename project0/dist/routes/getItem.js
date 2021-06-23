"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const ddbDocClient_js_1 = require("../libs/ddbDocClient.js");
const MonsterDrops_js_1 = require("../model/MonsterDrops.js");
const TABLE_NAME = "genshin-drops";
const getItem = async (monDrop) => {
    // Set the parameters.
    const params = {
        TableName: TABLE_NAME,
        Key: {
            name: monDrop.name,
        },
    };
    try {
        const data = await ddbDocClient_js_1.ddbDocClient.send(new lib_dynamodb_1.GetCommand(params));
        console.log("Success :", data.Item);
        let mons = [];
        let count = 0;
        for (const i of data.Item.monster) {
            mons[count] = i;
            count++;
        }
        let MD = new MonsterDrops_js_1.default(data.Item.name, data.Item.generalName, mons, data.Item.dropRate, data.Item.minWorldRank, data.Item.rarity);
        return MD;
    }
    catch (err) {
        console.log("Error", err);
    }
};
exports.getItem = getItem;
//getItem();
