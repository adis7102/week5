function kaliTerusRekursif(angka) {
    angka = angka.toString()
    if(angka.length === 1){
        return angka[0]
    }
    if(angka.length === 2){
       angka =  angka[0] * angka[1]
        return kaliTerusRekursif(angka)
    }
    return  angka[0] * kaliTerusRekursif(angka.slice(1))
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6