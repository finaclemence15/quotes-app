
export class Quotes {
  showAuthor: boolean;
  constructor(public id: number, public author: string, public name: string, public completeDate: Date) {
    this.showAuthor = false;
  }
}

