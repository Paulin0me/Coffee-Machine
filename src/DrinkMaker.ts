export enum DrinkType {
  COFFEE = "C",
  TEA ="T",
  HOT_CHOCOLATE = "H",
}

const MESSAGE_CODE = 'M'

export class DrinkMaker {
  drinkSelection: DrinkType;
  sugarAmount: number = 0;

  public makeDrink(drinkOrder: string) {
    if (drinkOrder.charAt(0) === MESSAGE_CODE) {
      this.sendMessage(drinkOrder.split(':', 2)[1]);
      return;
    }

    let [drinkType, sugarAmount] = drinkOrder.split(':', 2)
    this.drinkSelection = drinkType as DrinkType;

    if ([1,2].includes(Number(sugarAmount)) ) {
      this.sugarAmount = Number(sugarAmount)
    }
  }

  private sendMessage(message: string) {
    console.log(message);
  }
}