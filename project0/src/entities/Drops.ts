export interface IMonsterDrops{
    dropName: string,
    photo: string,
    generalName: string,
    monster: string[],
    dropRate:number,
    minWorldRank:number,
    rarity:string
}

class MonsterDrops implements IMonsterDrops {
    public dropName: string;
    public photo: string;
    public generalName: string;
    public monster:string[];
    public dropRate:number;
    public minWorldRank: number;
    public rarity:string;

    constructor(dropName:string, photo:string, generalName:string, monster:string[], dropRate:number, minWorldRank:number, rarity:string) {
        this.dropName = dropName; 
        this.photo = photo;
        this.generalName = generalName;
        this.monster = monster;
        this.dropRate = dropRate;
        this.minWorldRank = minWorldRank; 
        this.rarity = rarity;
    }
}
export default MonsterDrops;