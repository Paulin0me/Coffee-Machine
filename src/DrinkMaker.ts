export enum DrinkType {
  COFFEE= "coffee",
  TEA="tea",
  COCOA="cocoa"
}

export class DrinkMaker {
  drinkSelection: DrinkType;

  public makeDrink(drinkOrder: string) {
    if(drinkOrder.startsWith('C')) {
      this.drinkSelection = DrinkType.COFFEE
    }
  
  }

}
