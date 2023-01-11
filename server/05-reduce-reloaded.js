//Metodo que cuenta la cantidad de veces que se repite un numero en un array
const numbers = [1,3,2,3,1,10,3];
const rta = numbers.reduce((obj, item) => {
    if(obj[item]){
        obj[item] += 1;
    }else{
        obj[item] = 1;
    }
    return obj;
},{})

console.log(rta)

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

//Metodo que crea un objeto con los niveles como keys y los nombres como valores
const rta2 = data.reduce((obj, item) => {
    if (obj[item.level]) {
        obj[item.level].push(item.name);
    } else {
        obj[item.level] = [item.name];
    }
    return obj;
}, {});

console.log(rta2)

//Metodo que crea un objeto con la cantidad de veces que se repite un nivel
const rta3 = data
    .map((item) => item.level)
    .reduce((obj, item) => {
        if (obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
        return obj;
    }, {});

console.log(rta3)

//Metodo que cuenta cuantos elementos hay por rangos
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 3, 2, 4, 4, 7];

const beetween = (num, min, max) => num >= min && num <= max;

const rta4 = numbersArr.reduce((obj, item) => {
    if(beetween(item, 1, 5)) obj["1-5"] += 1;
    if(beetween(item, 6, 8)) obj["6-8"] += 1;
    if(beetween(item, 9, 10)) obj["9-10"] += 1;
    return obj;
}, 
{
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
});

console.log(rta4)


