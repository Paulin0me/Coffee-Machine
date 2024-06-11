export enum DrinkType {
  COFFEE= "coffee",
  TEA="tea",
  COCOA="cocoa"
}

export class DrinkMaker {
  drinkSelection: DrinkType;
  sugarAmount: number = 0;

  public makeDrink(drinkOrder: string) {
    let drinkType = drinkOrder.charAt(0);
    let sugarAmount = drinkOrder.charAt(2);

    if (drinkType === 'C') {
      this.drinkSelection = DrinkType.COFFEE
    }
    
    if (sugarAmount == '1') {
      this.sugarAmount = 1
    }
  }

}
