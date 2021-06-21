import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/ddbDocClient.js";
const TABLE_NAME = "genshin-drops"

// Set the parameters
const params = {
  TableName: TABLE_NAME,
  /*
  Convert the attribute JavaScript object you are updating to the required
  Amazon  DynamoDB record. The format of values specifies the datatype. The
  following list demonstrates different datatype formatting requirements:
  String: "String",
  NumAttribute: 1,
  BoolAttribute: true,
  ListAttribute: [1, "two", false],
  MapAttribute: { foo: "bar" },
  NullAttribute: null
   */
  Key: {
    "name": "Damaged Mask", // For example, 'Season': 2.
    //sortKey: "VALUE_2", // For example,  'Episode': 1; (only required if table has sort key).
  },
  // Define expressions for the new or updated attributes
  UpdateExpression: "set monster = :t, rarity = :s", // For example, "'set Title = :t, Subtitle = :s'"
  ExpressionAttributeValues: {
    ":t": "Hilichurls", // For example ':t' : 'NEW_TITLE'
    ":s": "grey", // For example ':s' : 'NEW_SUBTITLE'
  },
};

const UpdateDrop = async () => {
  try {
    const data = await ddbDocClient.send(new UpdateCommand(params));
    console.log("Success - item added or updated", data);
    console.log(params);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
UpdateDrop();