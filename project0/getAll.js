import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/ddbDocClient.js";
const TABLE_NAME = "genshin-drops";

// Set the parameters.
const params = {
  TableName: TABLE_NAME,
};

const getAllItems = async () => {
  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    console.log("Success :", data.Items);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
getAllItems();

//export function getItem()