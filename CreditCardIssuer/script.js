function getIssuer(number) {
numberStr = number.toString();

 if((numberStr.startsWith('34') || numberStr.startsWith('37')) && numberStr.length === 15 ){
   return "AMEX"
 }else if(numberStr.startsWith('6011') && numberStr.length === 16 ){
   return 'Discover'
 }else if((numberStr.startsWith('51') || numberStr.startsWith('52')
 || numberStr.startsWith('53') || numberStr.startsWith('54')
 || numberStr.startsWith('55')) && numberStr.length === 16){
return "Mastercard"
 }else if(numberStr.startsWith('4') && (numberStr.length === 13 || numberStr.length === 16 ) ){
return "VISA"
 }else{
 return 'Unknown'
 }
}