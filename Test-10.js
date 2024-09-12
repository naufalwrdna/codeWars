function countSheeps(sheep) {
    return sheep.reduce((count, present) => count + (present === true ? 1 : 0), 0)
  }