function findMissingLetter(array)
{
  let charCode = array[0].charCodeAt();
  for(let i = 1; i < array.length; i++){
    if(charCode+1 != array[i].charCodeAt()){
      return String.fromCharCode(charCode+1)
    } else{
      charCode = array[i].charCodeAt();
    }
  }
}

findMissingLetter(['a','b','c','d','f']);