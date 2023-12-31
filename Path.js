// [1, 9, 3, 2, 8]
// 
// 

const hasIncreasingDigits = (arr) => {
  let set = {i: 0, j: null, k: null}
  // iterate through array
  for (set.i = 0; set.i < arr.length - 2; set.i++) {
    set = findNextLarger(arr, i, i, set)
  }

  // if we have found all values, return true
  if (set.i && set.j && set.k) {
    return true
  } else {
    return false
  }
}
// find the next item in the array that is larger than the current item
const findNextLarger = (arr, index, checkIndex, set) => {

  // if we found a larger number
  if (arr[index + 1] > arr[checkIndex]) {
    // check which values have been found, and set the next value
    if (!set.j) {
      set.j = index + 1
      set = findNextLarger(arr, index + 1, checkIndex, set)
      if (set.k) {
        return set
      }
    } else if (!set.k) {
      // if we did not find a matching k, reset j value and continue down the list
      set.j = null
      return set
    }      
  }  
  
  // check if we are at the end of the array, if not then continue
  if (!(index + 1 === arr.length - 1)) {
    set = findNextLarger(arr, index + 1, val, set)
  } else {
    // if we are at the end of the list, and a value is null, return
    if (!set.k || !set.j) {
      return set;
    }
  }

  // if we have found all values, return
  if (set.i && set.j && set.k) {
    return set
  }


}