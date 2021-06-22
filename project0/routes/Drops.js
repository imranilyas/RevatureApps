import { GetCommand, PutCommand, ScanCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../libs/ddbDocClient.js";
import MonsterDrops from "../model/MonsterDrops.js";
const TABLE_NAME = "genshin-drops";

//retrieve 1 item by name
export const getItem = async () => {
// Set the parameters.
    const params = {
        TableName: TABLE_NAME,
        Key: {
        'name': "ominous mask",
        },
    };
    try {
        const data = await ddbDocClient.send(new GetCommand(params));
        console.log("Success :", data.Item);
        return data;
    }catch (err) {
        console.log("Error", err);
    }
};

//retrieves all items from table
export const getAllItems = async () => {
    const params = {
        TableName: TABLE_NAME,
    };      
    
    try {
      const data = await ddbDocClient.send(new ScanCommand(params));
      console.log("Success :", data.Items);
      return data;
    } catch (err) {
      console.log("Error", err);
    }
};  

//add 1 item to the table
export const addItem = async () => {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            name: "Nectar", 
            monster: "Whooping Flowers",
            rarity: "grey",
        },
    };

    try {
      const data = await ddbDocClient.send(new PutCommand(params));
      console.log("Success - item added or updated", data);
      console.log(params);
      return data;
    } catch (err) {
      console.log("Error", err);
    }
};

//update 1 item in the table
export const updateDrop = async () => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
          "name": "Damaged Mask", 
        },
        // Define expressions for the new or updated attributes
        UpdateExpression: "set monster = :t, rarity = :s",
        ExpressionAttributeValues: {
          ":t": "Hilichurls",
          ":s": "grey",
        },
    };    

    try {
      const data = await ddbDocClient.send(new UpdateCommand(params));
      console.log("Success - item added or updated", data);
      console.log(params);
      return data;
    } catch (err) {
      console.log("Error", err);
    }
};

//delete/remove an item from the list
export const deleteDrop = async () => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
          name: "Damaged Mask", 
        },
    };    
    try {
      const data = await ddbDocClient.send(new DeleteCommand(params));
      console.log("Success - item deleted");
      return data;
    } catch (err) {
      console.log("Error", err);
    }
};
