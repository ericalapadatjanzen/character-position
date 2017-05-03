
function countLetters(string){
  var output = [];
  for(var i = 0; i < string.length; i++){
    var theString = string[i];
    if (theString !== " "){
      if (theString in output){
        output[theString].push(i);
      } else {
        output[theString] = [i];
      }
    }
  }

  return output;
}
console.log(countLetters("lighthouse in the house"));