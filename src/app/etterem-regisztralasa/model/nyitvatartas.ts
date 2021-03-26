import { Nap } from "./nap";

export class Nyitvatartas{
    napok: Nap[]    

    constructor(){
        this.napok=[];
    }

    addNap(nap: Nap){
        this.napok.push(nap);
    }
}