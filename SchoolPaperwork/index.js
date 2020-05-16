// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need.

// Example:
// paperwork(5, 5) == 25
// Note: if n < 0 or m < 0 return 0!

// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
    m = m > 0 ? m : 0;
    n = n > 0 ? n : 0;
    return n * m;
  }