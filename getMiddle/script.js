function getMiddle(s)
{
 if((s.length) % 2 !== 0){
  return s.charAt(s.length / 2)
  }
return s.split("").splice((s.length / 2) - 1, 2).join("");
}