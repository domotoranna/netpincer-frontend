
export class Nap{
    constructor(napId:number, konyhaNyit: number, konyhaZar: number, etteremNyit: number, etteremZar: number){
        this.NapId=napId;
        this.KonyhaNyit=konyhaNyit;
        this.KonyhaZar=konyhaZar;
        this.EtteremNyit=etteremNyit;
        this.EtteremZar=etteremZar;
    }

    NapId: number;
    KonyhaNyit: number;
    KonyhaZar: number;
    EtteremNyit: number;
    EtteremZar: number;
}