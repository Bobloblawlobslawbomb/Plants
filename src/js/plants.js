export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
  return "ok";
}

export const hydrate = (plant) => {
  console.log(plant);
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

export const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
}

export const giveLight = (plant) => {
  return {
    ...plant,
    light: (plant.light || 0) + 1
  }
}


// export const changePlantState = (plant, property) => {
//   return 0;
//   // return {
//   //   ...plant,
//   //   [property]: (plant[property] || 0) + 1
//   // }
// }







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