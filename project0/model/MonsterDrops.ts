export interface IMonsterDrops{
    name: string,
    generalName?: string,
    monster?: string[],
    dropRate?:number,
    minWorldRank?:number,
    rarity?:string
}

class MonsterDrops implements IMonsterDrops {
    public name: string;
    public generalName?: string;
    public monster?:string[];
    public dropRate?:number;
    public minWorldRank?: number;
    public rarity?:string;

    constructor(name:string, generalName?:string, monster?:string[], dropRate?:number, minWorldRank?:number, rarity?:string) {
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
            "monster": {"SS": this.monster},
            "dropRate": {"N": this.dropRate},
            "minWorldRank": {"N": this.minWorldRank},
            "rarity": {"N": this.rarity}
        };
        return Item;
    }
}
export default MonsterDrops;