function betterThanAverage(classPoints, yourPoints) {
    const totalPoints = classPoints.reduce((sum, point) => sum + point, 0);

    const averagePoints = totalPoints / classPoints.length;

    return yourPoints > averagePoints;
  }