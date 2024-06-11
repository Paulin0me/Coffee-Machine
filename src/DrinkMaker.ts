export enum DrinkType {
  COFFEE= "coffee",
  TEA="tea",
  COCOA="cocoa"
}

export class DrinkMaker {
  drinkSelection: DrinkType;

  public makeDrink(drinkOrder: string) {
    let drinkType = drinkOrder.charAt(0);
    
    if(drinkType === 'C') {
      this.drinkSelection = DrinkType.COFFEE
    }
  
  }

}
