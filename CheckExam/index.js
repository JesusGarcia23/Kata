// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"].
// The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length.
// Return the score for this array of answers, giving +4 for each correct answer, 
// -1 for each incorrect answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.

function checkExam(array1, array2) {
  const value = array1.reduce((counter, value, index) => {
    if(value === array2[index]) {
      return counter += 4
    }else{
      return counter += array2[index] == "" ? 0 : -1 
    }
  }, 0)

  return value > 0 ? value : 0
}