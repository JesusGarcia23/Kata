function toInitials(name) {
  let spreadName = name.split(" ")
  let initials = [];
  for(i = 0; i < spreadName.length; i++){
   initials.push(spreadName[i].charAt(0) + ".");
  }
  return initials.join(" ");
}