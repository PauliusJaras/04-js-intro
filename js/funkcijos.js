console.groupCollapsed("Funkcijos");

console.groupCollapsed("#1: Funkcija pavadinimu “tusciaFunkcija”:")

function tusciaFunkcija(){
    return false;
}

console.log(tusciaFunkcija());
console.groupEnd();

console.groupCollapsed("#2: Funkcija pavadinimu “daugyba”:")

function daugyba(a, b){
    const result = a * b;
    return result;
}

console.log(daugyba(2,3));
console.log(daugyba(5,4));
console.log(daugyba(6,7));
console.groupEnd();

console.groupCollapsed("#3: Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:")

function skaitmenuKiekisSkaiciuje(num){
    if(typeof num != typeof 1 || Number.isNaN(num) == true){
        return "Pateikta netinkamo tipo reikšmė.";
    } else{
        const num_length = (''+num).length;
        return num_length;
    }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.groupEnd();

console.groupCollapsed("#4: Funkcija pavadinimu “didziausiasSkaiciusSarase”:")

function didziausiasSkaiciusSarase(arr){
    if(!Array.isArray(arr)){
        return "Pateikta netinkamo tipo reikšmė.";
    } else if(arr.length == 0){
        return "Pateiktas sąrašas negali būti tuščias.";
    } else {
        let highestNumber = -Infinity;
        arr.forEach(ar =>{
            if(!isNaN(ar) && isFinite(ar) && typeof ar != typeof true && typeof ar != typeof []){
                highestNumber < ar ? (highestNumber = ar) : 0;
            } 
        });
        return isFinite(highestNumber) ? highestNumber : "ERROR";
    }
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([ -5, 78, 14, 0, 18 ]));
console.log(didziausiasSkaiciusSarase([ 69, 69, 69, 69, 66 ]));
console.log(didziausiasSkaiciusSarase([ -1, -2, -3, -4, -5, -6, -7, -8 ]));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(didziausiasSkaiciusSarase([]));

console.log(didziausiasSkaiciusSarase([1,2,3, Infinity]));
console.log(didziausiasSkaiciusSarase([1,2,Infinity, 3]));
console.log(didziausiasSkaiciusSarase([1,Infinity,2,3]));
console.log(didziausiasSkaiciusSarase([Infinity, 1,2,3]));

console.log(didziausiasSkaiciusSarase([1,2,3, NaN]));
console.log(didziausiasSkaiciusSarase([1,2,NaN, 3]));
console.log(didziausiasSkaiciusSarase([1,NaN,2,3]));
console.log(didziausiasSkaiciusSarase([NaN, 1,2,3]));

console.log(didziausiasSkaiciusSarase([1,2,3, true]));
console.log(didziausiasSkaiciusSarase([1,2,true, 3]));
console.log(didziausiasSkaiciusSarase([1,true,2,3]));
console.log(didziausiasSkaiciusSarase([true, 0,-1,-2]));

console.log(didziausiasSkaiciusSarase([1,2,3, 'true']));
console.log(didziausiasSkaiciusSarase([1,2,'true', 3]));
console.log(didziausiasSkaiciusSarase([1,'true',2,3]));
console.log(didziausiasSkaiciusSarase(['true', 1,2,3]));

console.log(didziausiasSkaiciusSarase(['true', true, NaN, [], [5], Infinity, -Infinity, 0]));
console.log(didziausiasSkaiciusSarase(['true', true, NaN, [], [5], Infinity, -Infinity]));

console.groupEnd();

console.groupCollapsed("#5: Funkcija pavadinimu “isrinktiRaides”:")

function isrinktiRaides(text, num){
    if(typeof text != 'string'){
        return "Pirmasis kintamasis yra netinkamo tipo";
    } else if(text.length <= 0 || text.length >= 100) {
            return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
    } else if(typeof num != typeof 1 || Number.isNaN(num) == true){
            return "Antrasis kintamasis yra netinkamo tipo.";
    } else if(num <= 0){
        return "Antrasis kintamasis turi būti didesnis už nulį.";
    } else if (text.length < num){
        return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį";
    } else{
        let result = "";
        for(let i = num-1; i < text.length; i+=num ){
            result += text[i];
        }
        return result;
    }
}

console.log(isrinktiRaides("abcdefg", 2));
console.log(isrinktiRaides("abcdefghijkl", 3));
console.log(isrinktiRaides("abc", 0));
console.log(isrinktiRaides("abc", 4));
console.log(isrinktiRaides(1561, 2));
console.groupEnd();

console.groupCollapsed("#6: Funkcija pavadinimu “dalyba”:")

function dalyba(a,b){
    if(typeof a != typeof 1 || Number.isNaN(a) == true){
        return "Pirmasis kintamasis yra netinkamo tipo";
    } else if(typeof b != typeof 1 || Number.isNaN(b) == true){
        return "Antrasis kintamasis yra netinkamo tipo.";
    } else if(b == 0){
        return "Dalyba is nulio negalima";
    } else {
        let result = a / b;
        return result;
    }
}

console.log(dalyba(4,2));
console.log(dalyba("7a",2));
console.log(dalyba(4,"2"));
console.log(dalyba(6,0));
console.log(dalyba(0,9));
console.groupEnd();

console.groupEnd();