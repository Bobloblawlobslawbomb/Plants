export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

export const hydrate = (plant) => {
  // return {
  //   ...plant,
  //   water: (plant.water || 0) + 1
  return "hi";
}







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