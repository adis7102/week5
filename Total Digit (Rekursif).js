function totalDigitRekursif(angka) {
    angka = angka.toString()
    if(angka.length === 1){
        return Number(angka[0])
    }
    return Number(angka[0]) + totalDigitRekursif(angka.slice(1))
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5