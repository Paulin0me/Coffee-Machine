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
  it('should make a tea', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("T::")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.TEA)
    }))
  })

  it('should make a hot chocolate', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("H::")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.HOT_CHOCOLATE)
    }))
  })

  it('should send a message to the customer', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("M:message-content")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.MESSAGE)
    }))
  })
})
