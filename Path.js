// [1, 9, 3, 2, 8]
// 
// 

const hasIncreasingDigits = (arr, digitQuantity) => {
  let set = {i: 0, j: null, k: null}

  // iterate through array
  for (set.i = 0; set.i < arr.length - 2; set.i++) {
    set = findNextLarger(arr, i, i, set)
  }
  
}
// find the next item in the array that is larger than the current item
const findNextLarger = (arr, index, checkIndex, set) => {


  if (arr[index + 1] > arr[checkIndex]) {
    if (!set.j) {
      set.j = index + 1
      set = findNextLarger(arr, index + 1, checkIndex, set)
      if (set.k) {
        return set
      }
    } else if (!set.k) {
      // if we did not find a matching k, reset j and continue searching
      set.j = null
      return set
    }      
  }  
  
  if (!(index + 1 === arr.length - 1)) {
    set = findNextLarger(arr, index + 1, val, set)
  } else {
    if (!set.k || !set.j) {
      return set;
    }
  }

  if (set.i && set.j && set.k) {
    return set
  }


}