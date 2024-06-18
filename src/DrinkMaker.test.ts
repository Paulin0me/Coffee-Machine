import { assert, property, string } from 'fast-check'
import { DrinkMaker, DrinkType } from './DrinkMaker'

describe('Drink Maker', () => {
  it('should make a coffee', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("C::1")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.COFFEE)
    }))
  })
  it('should make a coffee with one sugar and a stick', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("C:1:1")

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
      const answer = drinkMaker.makeDrink("T::1")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.TEA)
    }))
  })

  it('should make a hot chocolate', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("H::1")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.HOT_CHOCOLATE)
    }))
  })
  it('should make a hot chocolate with two sugars and a stick', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("H:2:1")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.HOT_CHOCOLATE)
      expect(drinkMaker.sugarAmount).toBe(2)
      }))
  })

  it('should send a message to the customer', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()
      console.log = jest.fn();

      // Act
      const answer = drinkMaker.makeDrink("M:message-content")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(undefined)
      expect(console.log).toHaveBeenCalledWith('message-content');
    }))
  })

  it('should make a coffee if enough money is given', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("C:0:1")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.COFFEE)
    }))
  })
  it('should not make a coffee if enough money is given', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()
      console.log = jest.fn();

      // Act
      const answer = drinkMaker.makeDrink("C:0:0.1")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(undefined)
      expect(console.log).toHaveBeenCalledWith('Please add 0.3 euro for your order');
    }))
  })
})
