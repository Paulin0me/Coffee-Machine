export enum DrinkType {
  COFFEE = "C",
  TEA ="T",
}

export class DrinkMaker {
  drinkSelection: DrinkType;
  sugarAmount: number = 0;

  public makeDrink(drinkOrder: string) {
    let [drinkType, sugarAmount] = drinkOrder.split(':', 2)
    
    this.drinkSelection = drinkType as DrinkType

    if (Number(sugarAmount) == 1) {
      this.sugarAmount = 1
    }
  }

}