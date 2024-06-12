export enum DrinkType {
  COFFEE= "coffee",
  TEA="tea",
  COCOA="cocoa"
}

export class DrinkMaker {
  drinkSelection: DrinkType;
  sugarAmount: number = 0;

  public makeDrink(drinkOrder: string) {
    let [drinkType, sugarAmount] = drinkOrder.split(':', 2)

    if (drinkType === 'C') {
      this.drinkSelection = DrinkType.COFFEE
    }

    if(drinkType === 'T') {
      this.drinkSelection = DrinkType.TEA
    }
    
    if (Number(sugarAmount) == 1) {
      this.sugarAmount = 1
    }
  }

}
