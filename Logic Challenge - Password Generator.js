function changeVocals(str) {
  var b = str;
  var temp = ''
  for (var i = 0; i < b.length; i++) {
    if (b[i] === "a") {
      temp += "b";
    } else if (b[i] === "i") {
      temp += "j";
    } else if (b[i] === "e") {
      temp += "f";
    } else if (b[i] === "o") {
      temp += "p";
    } else if (b[i] === "u") {
      temp += "v";
    }
     else if (b[i] === "A") {
        temp += "B";
      } else if (b[i] === "I") {
        temp += "J";
      } else if (b[i] === "E") {
        temp += "F";
      } else if (b[i] === "O") {
        temp += "P";
      } else if (b[i] === "U") {
        temp += "V";
      }
    else{
        temp += b[i]
    }
  }
  return temp
}

function reverseWord(str) {
    var vocal = str
  var temp = ''

  for(i = vocal.length-1; i >= 0 ; i--){
    temp += vocal[i]
  }
  return temp
}

function setLowerUpperCase(str) {
    var a = str
    var temp = ''
    for(i = 0; i < a.length; i++){
        if(a[i] === a[i].toLowerCase()){
            temp += a[i].toUpperCase()
        }
        if(a[i] === a[i].toUpperCase()){
            temp += a[i].toLowerCase()
        }
    }

    return temp
}

function removeSpaces(str) {
    var r = str
    var temp = []
  for(i = 0; i < r.length; i++){
      if(r[i] !== ' '){
          temp.push(r[i])
      }
  }
  return temp.join('')
}


function passwordGenerator(name) {
    if(name.length < 5 ){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var vcl= changeVocals(name)
    var reversed = reverseWord(vcl)
    var lowerOrUpper = setLowerUpperCase(reversed)
    var rmvspace = removeSpaces(lowerOrUpper)
    return rmvspace
  
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
