function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(item => item.gender === gender)
      .reduce((acc, item, index, arr) => {
        return acc + item.age / arr.length;
      }, 0) 
  }
  
