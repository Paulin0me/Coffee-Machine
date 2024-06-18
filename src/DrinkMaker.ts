export enum DrinkType {
  COFFEE = "C",
  TEA ="T",
  HOT_CHOCOLATE = "H",
}
const drinkMenu = new Map<DrinkType, number>([
  [DrinkType.COFFEE, 0.6],
])
const MESSAGE_CODE = 'M'

export class DrinkMaker {
  drinkSelection: DrinkType;
  sugarAmount: number = 0;

  public makeDrink(drinkOrder: string) {
    if (drinkOrder.charAt(0) === MESSAGE_CODE) {
      this.sendMessage(drinkOrder.split(':', 2)[1]);
      return;
    }

    let [drinkType, sugarAmount, moneyProvided] = drinkOrder.split(':', 3);

    const remainder: number = (Number(moneyProvided) - drinkMenu.get(drinkType as DrinkType));
    if (remainder < 0) {
      this.sendMessage(`Please add ${-remainder.toFixed(1)} euro for your order`);
      return;
    }

    this.drinkSelection = drinkType as DrinkType;

    if ([1,2].includes(Number(sugarAmount)) ) {
      this.sugarAmount = Number(sugarAmount)
    }
  }

  private sendMessage(message: string) {
    console.log(message);
  }
}