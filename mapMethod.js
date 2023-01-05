//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperNames = names.map((name) => name.toLocaleUpperCase());
console.log(upperNames);
console.log(names);

console.log(names.map((name) => name.toLocaleUpperCase()));
