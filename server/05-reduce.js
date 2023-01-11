const totals = [1,2,3,4];

const rta = totals.reduce((sum, item) => {
    return sum + item;
},0);
console.log(rta)

