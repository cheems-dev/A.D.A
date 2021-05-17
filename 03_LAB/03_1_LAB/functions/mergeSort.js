export default function mergeSort(arr = []) {
  // make a copy of the arr
  let result = arr;
  // length of the sort arr
  let len = result.length;
  // Creates a buffer to push all result elements into on each
  // iteration
  let buffer = [];

  // size increases by 2 every loop
  for (let size = 1; size < len; size *= 2) {
    // leftStart increases by 2 * size every loop
    // This acts as the first index of each pair in the arr
    for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
      // The left index is a copy of the leftStart
      let left = leftStart;

      // The right index will be the smaller of the left +
      // the current size or the length of the array
      let right = Math.min(left + size, len);

      // The left limit will be whatever the right index is
      let leftLimit = right;
      // The right limit will be the smaller of the right +
      // the current size or the length of the array
      let rightLimit = Math.min(right + size, len);
      // The iterator will be a copy of the left
      let i = left;
      // The first while loop will check if the left and right
      // indexes are both less than their limits
      // Then it will push which ever value is smaller into
      // the buffer array, increases the iterator and the
      // index values, exit the loop
      while (left < leftLimit && right < rightLimit) {
        if (result[left] <= result[right]) {
          buffer[i] = result[left];
          left++;
          i++;
        } else {
          buffer[i] = result[right];
          right++;
          i++;
        }
      }
      // This loop checks if the left index is smaller than its
      // limit if true it adds that value to the buffer
      while (left < leftLimit) {
        buffer[i] = result[left];
        left++;
        i++;
      }
      // This loop checks if the right index is smaller than its
      // limit if true it adds that value to the buffer
      while (right < rightLimit) {
        buffer[i] = result[right];
        right++;
        i++;
      }
    }
    // These are created after each inner loop completes
    // Create a temp array that is a copy of the original result
    // array (unsorted values)
    // The result array replaces all of its values with the buffer
    // array (fully or partially sorted)
    // The buffer then copies the unsorted temp array, which is
    // used again in the next inner loop iteration
    let temp = result;
    result = buffer;
    buffer = temp;
  }
  return result;
}
