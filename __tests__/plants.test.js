import * as plants from '../src/js/plants';

describe('Plant', () => {
  test('should make an instance of new plant', () => {
    const initialState = { water: 2, soil: 4, light: 3 }
    const myPlant = plants.storeState(initialState);
    expect(myPlant()).toMatchObject({ water: 2, soil: 4, light: 3 });
  });
});