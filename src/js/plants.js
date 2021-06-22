// export const plants = () => {
//   return 0;
// }

// export const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };


export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

// describe('Character', () => {
//     test('should make an instance of new character', () => {
//       const initialState = {brawn: 2, brains: 4, beauty:3}








// export default class Plant {
//   constructor() {
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
//   }

//   hydrate() {
//     this.water++
//   }

//   feed() {
//     this.soil++
//   }

//   giveLight() {
//     this.light++
//   }
// }