function findNeedle(haystack) {
    const index = haystack.indexOf('needle');

    return `found the needle at position ${index}`
  }

  const array = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

  console.log(findNeedle(array))