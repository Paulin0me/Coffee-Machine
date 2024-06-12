export enum DrinkType {
  COFFEE = "C",
  TEA ="T",
  HOT_CHOCOLATE = "H",
  MESSAGE = "M"
}

export class DrinkMaker {
  drinkSelection: DrinkType;
  sugarAmount: number = 0;

  public makeDrink(drinkOrder: string) {
    let [drinkType, sugarAmount] = drinkOrder.split(':', 2)
    
    this.drinkSelection = drinkType as DrinkType;

    if (this.drinkSelection === DrinkType.MESSAGE) {
      //do the thing to send the message
    }

    if (Number(sugarAmount) == 1) {
      this.sugarAmount = 1
    }
  }

}