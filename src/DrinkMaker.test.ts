import { assert, property, string } from 'fast-check'
import { DrinkMaker, DrinkType } from './DrinkMaker'

describe('Drink Maker', () => {
  it('make a coffee', () => {
    assert(property(string(), (order) => {
      // Arrange
      const drinkMaker = new DrinkMaker()

      // Act
      const answer = drinkMaker.makeDrink("C::")

      // Assert
      expect(drinkMaker.drinkSelection).toBe(DrinkType.COFFEE)
    }))
  })
})
