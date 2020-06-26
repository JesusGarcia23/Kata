// In English, all words at the begining of a sentence should begin with a capital letter.

// You will be given a paragraph that does not use capital letters.
// Your job is to capitalise the first letter of the first word of each sentence.

// For example,

// input:

// "hello. my name is inigo montoya. you killed my father. prepare to die."

// output:

// "Hello. My name is inigo montoya. You killed my father. Prepare to die."

function fix(paragraph){
    return paragraph.split(".").map(value => 
    value.trim().charAt(0).toUpperCase() + value.trim().slice(1)).join(". ").trim()
  }