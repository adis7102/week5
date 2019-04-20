function sorting(arrNumber) {
    var arr = arrNumber
    var arrSort = arr.sort(function(value1, value2) {return value2 - value1})
    return arrSort
  }

  function getTotal(arrNumber) {
    var sorted = sorting(arrNumber)
    var result = []
    if(sorted.length === 0){
      return "''"
    }
    for(i = 0; i < sorted.length; i++){
      if(sorted[0] == sorted[i]){
        result.push(sorted[i])
      }
    }
    return 'angka paling besar adalah ' + sorted[0] + ' kemunculannya adalah sebanyak ' + result.length + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''