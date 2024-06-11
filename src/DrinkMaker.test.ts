import { assert, property, string } from 'fast-check'
import { DrinkMaker, DrinkType } from './DrinkMaker'

describe('Drink Maker', () => {
  it('should make a coffee', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("C::")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.COFFEE)
    }))
  })
  it('should make a coffee with one sugar', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("C:1:")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.COFFEE)
      expect(drinkMaker.sugarAmount).toBe(1)
    }))
  })
})
