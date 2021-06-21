export interface IMonsterDrops{
    name: string,
    generalName: string,
    monsters: string[],
    dropRate:number,
    minWorldRank:number,
    rarity:string
}

class MonsterDrops implements IMonsterDrops {
    public name: string;
    public generalName: string;
    public monsters:string[];
    public dropRate:number;
    public minWorldRank: number;
    public rarity:string;

    constructor(name:string, generalName:string, monsters:string[], dropRate:number, minWorldRank:number, rarity:string) {
        this.name = name; 
        this.generalName = generalName;
        this.monsters = monsters;
        this.dropRate = dropRate;
        this.minWorldRank = minWorldRank; 
        this.rarity = rarity;
    }

}
export default MonsterDrops;