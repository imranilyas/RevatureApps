"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MonsterDrops {
    constructor(name, generalName, monster, dropRate, minWorldRank, rarity) {
        this.name = name;
        this.generalName = generalName;
        this.monster = monster;
        this.dropRate = dropRate;
        this.minWorldRank = minWorldRank;
        this.rarity = rarity;
    }
    objectify() {
        let Item = {
            "name": { "S": this.name },
            "generalName": { "S": this.generalName },
            "monster": { "SS": this.monster },
            "dropRate": { "N": this.dropRate },
            "minWorldRank": { "N": this.minWorldRank },
            "rarity": { "N": this.rarity }
        };
        return Item;
    }
}
exports.default = MonsterDrops;
