import * as plants from '../src/js/plants';

describe('Plant', () => {
  test('should make an instance of new plant', () => {
    const initialState = { water: 2, soil: 4, light: 3 }
    const myPlant = plants.storeState(initialState);
    expect(myPlant()).toMatchObject({ water: 2, soil: 4, light: 3 });
  });
});

// describe('Character', () => {
//   test('should make an instance of new character', () => {
//     const initialState = { brawn: 2, brains: 4, beauty: 3 }
//     const myCharacter = tools.storeState(initialState);
//     expect(myCharacter()).toMatchObject({ brawn: 2, brains: 4, beauty: 3 });
//   });



// describe('Plant', () => {
//   test('should make an instance of new plant', () => {
//     // const initialState = { water: 2, soil: 4, light: 3 }
//     // const myPlant = plants.storeState(initialState);
//     let myPlant = new Plant();
//     expect(myPlant).toMatchObject({ water: 0, soil: 0, light: 0 });
//   });
// });