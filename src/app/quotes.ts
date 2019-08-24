// export class Quotes {
//     id: number;
//     name: string;
//     author: string;
// }
export class Quotes {
    showAuthor: boolean;
    constructor(public id: number,public name: string,public author: string){
      this.showAuthor=false;
    }
  }