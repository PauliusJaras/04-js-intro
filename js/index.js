//Kintamieji

console.groupCollapsed("Kintamųjų inicijavimas");

console.log("#1: Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis")

const one = 1;
const two = 2;
const three = 3;

console.log('', one, '\n', two,'\n', three);

console.log("#2: Sukurti 3 kintamuosius su teksto tipo reikšmėmis")

const zodis1 = "zodis";
const zodis2 = "zodis zodis";
const zodis3 = "zodis zodis zodis";

console.log('', zodis1, '\n',zodis2, '\n', zodis3);

console.log("#3: Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis")

const arrNum = [1,2,3,4,5];
const arrNum2 = [2,3,4,5,6];
const arrNum3 = [3,4,5,6,7];

console.log('',arrNum, '\n', arrNum2, '\n', arrNum3);

console.log("#4: Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis")

const arrText = ["1e","2d","3c","4b","5a"];
const arrText2 = ["2e","3d","4c","5b","6a"];
const arrText3 = ["3e","4d","5c","6b","7a"];

console.log('',arrText, '\n', arrText2, '\n', arrText3);


console.groupEnd();

console.groupCollapsed("Veiksmai su kintamaisiais");

console.log("#1: Susumuoti visus skaičiaus tipo kintamuosius")

const numResult = one + two + three;

console.log(numResult);

console.log("#2: Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas")

const textResult = zodis1 + " " + zodis2 + " " + zodis3;

console.log(textResult);

console.log("#3: Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką")

const arrResult = arrNum[0] - arrNum[1] + arrNum[2] + arrNum[3] + arrNum[4]; 
const arrResult1 = arrNum2[0] - arrNum2[1] + arrNum2[2] + arrNum2[3] + arrNum2[4];
const arrResult2 = arrNum3[0] - arrNum3[1] + arrNum3[2] + arrNum3[3] + arrNum3[4]; 

console.log('', arrResult, '\n', arrResult1, '\n', arrResult2)

console.log("#4: Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas")

const arrResultText = arrText[4] + ', ' + arrText[3] + ', ' + arrText[2] + ', ' + arrText[1] + ', ' + arrText[0]; 
const arrResultText2 = arrText2[4] + ', ' + arrText2[3] + ', ' + arrText2[2] + ', ' + arrText2[1] + ', ' + arrText2[0];
const arrResultText3 = arrText3[4] + ', ' + arrText3[3] + ', ' + arrText3[2] + ', ' + arrText3[1] + ', ' + arrText3[0]; 

console.log('', arrResultText, '\n', arrResultText2, '\n', arrResultText3)

console.groupEnd();

console.groupCollapsed("Kintamųjų palyginimas");

console.log("#1: Tarpusavyje palyginti skaičiaus tipo kintamuosius:")

console.log("a: kuris didesnis")
one > two ? console.log("Pomidoras") : console.log("Bandykite kita karta");
one > three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two > one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two > three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three > one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three > two ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("b: kuris mazesnis")
one < two ? console.log("Pomidoras") : console.log("Bandykite kita karta");
one < three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two < one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two < three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three < one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three < two ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("c: ar jie lygūs")
one == two ? console.log("Pomidoras") : console.log("Bandykite kita karta");
one == three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two == one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two == three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three == one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three == two ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("d: ar jie nelygūs")
one != two ? console.log("Pomidoras") : console.log("Bandykite kita karta");
one != three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two != one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two != three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three != one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three != two ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("e: kuris didesnis arba lygus")
one >= two ? console.log("Pomidoras") : console.log("Bandykite kita karta");
one >= three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two >= one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two >= three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three >= one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three >= two ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("f: kuris mažesnis arba lygus")
one <= two ? console.log("Pomidoras") : console.log("Bandykite kita karta");
one <= three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two <= one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
two <= three ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three <= one ? console.log("Pomidoras") : console.log("Bandykite kita karta");
three <= two ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("#2: Išvesti teksto tipo kintamųjų ilgius")

const ilgis = zodis1.length;
const ilgis2 = zodis2.length;
const ilgis3 = zodis3.length;

console.log(ilgis);
console.log(ilgis2);
console.log(ilgis3);

console.log("#3: Tarpusavyje palyginti teksto tipo kintamųjų ilgius:")

console.log("a: kuris didesnis")
ilgis > ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis > ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 > ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 > ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 > ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 > ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("b: kuris mazesnis")
ilgis < ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis < ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 < ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 < ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 < ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 < ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("c: ar jie lygūs")
ilgis == ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis == ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 == ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 == ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 == ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 == ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("d: ar jie nelygūs")
ilgis != ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis != ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 != ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 != ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 != ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 != ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("e: kuris didesnis arba lygus")
ilgis >= ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis >= ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 >= ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 >= ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 >= ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 >= ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("f: kuris mažesnis arba lygus")
ilgis <= ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis <= ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 <= ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis2 <= ilgis3 ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 <= ilgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
ilgis3 <= ilgis2 ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("#4: Išvesti sąrašo tipo kintamųjų ilgius")

const numIlgis = arrNum.length;
const textIlgis = arrText.length;

console.log('', numIlgis, '\n', textIlgis);

console.log("#5: Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:")

console.log("a: kuris didesnis")
numIlgis > textIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
textIlgis > numIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("b: kuris mazesnis")
numIlgis < textIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
textIlgis < numIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("c: ar jie lygūs")
numIlgis == textIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
textIlgis == numIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("d: ar jie nelygūs")
numIlgis != textIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
textIlgis != numIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("e: kuris didesnis arba lygus")
numIlgis >= textIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
textIlgis >= numIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.log("f: kuris mažesnis arba lygus")
numIlgis <= textIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");
textIlgis <= numIlgis ? console.log("Pomidoras") : console.log("Bandykite kita karta");

console.groupEnd();

console.groupCollapsed("Ciklo for panaudojimas");

console.log("#1: Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):")

console.log("a: 0 … 0")

let result = 0;

for (let i = 0; i < 0; i++){
    result + i;
};
console.log(result);

console.log("b: 0 … 4")
for (let i = 0; i <= 4; i++){
    result = result + i;
};

console.log(result);
result = 0;

console.log("c: 0 … 100")
for (let i = 0; i <= 100; i++){
    result = result + i;
};

console.log(result);
result = 0;

console.log("d: 574 … 815")
for (let i = 574; i <= 815; i++){
    result = result + i;
};

console.log(result);
result = 0;

console.log("e: -50 … 50")
for (let i = -50; i <= 50; i++){
    result = result + i;
};

console.log(result);
result = 0;

console.log("f: -70 … 30")
for (let i = -70; i <= 30; i++){
    result = result + i;
};

console.log(result);
result = 0;

console.log("#2: panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:")

let naujasZodis = "";

for(let i = 1; i <= zodis1.length; i++){
    naujasZodis = naujasZodis + zodis1[zodis1.length-i];
}

console.log(naujasZodis);

console.log("#3: Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:")

let dal3 = 0, dal5 = 0, dal7 = 0;

console.log("a: 0 - 11")
for (let i = 0; i <= 11; i++){
    i % 3 == 0 ? dal3++ : 0;
    i % 5 == 0 ? dal5++ : 0;
    i % 7 == 0 ? dal7++ : 0;
};

console.log(" Dalinasi is 3: ", dal3, '\n', "Dalinasi is 5: ", dal5, '\n', "Dalinasi is 7: ", dal7);
dal3 = 0, dal5 = 0, dal7 = 0;

console.log("b: 8 - 31")
for (let i = 8; i <= 31; i++){
    i % 3 == 0 ? dal3++ : 0;
    i % 5 == 0 ? dal5++ : 0;
    i % 7 == 0 ? dal7++ : 0;
};

console.log(" Dalinasi is 3: ", dal3, '\n', "Dalinasi is 5: ", dal5, '\n', "Dalinasi is 7: ", dal7);
dal3 = 0, dal5 = 0, dal7 = 0;

console.log("c: -18 - 18")
for (let i = -18; i <= 18; i++){
    i % 3 == 0 ? dal3++ : 0;
    i % 5 == 0 ? dal5++ : 0;
    i % 7 == 0 ? dal7++ : 0;
};

console.log(" Dalinasi is 3: ", dal3, '\n', "Dalinasi is 5: ", dal5, '\n', "Dalinasi is 7: ", dal7);

console.groupEnd();