const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },  
];

//? limpiar array
// const rta = orders.map((order) => order.total);
// console.log(rta);

//!Agrego propiedad manteniendo las referencias
// const rta2 = orders.map((order) => {
//     order.tax = .19;
//     return {...order};
// });

// console.log(rta2);
// console.log(orders);

//* Agrego propiedad quitando las referencias
const rta3 = orders.map((order) => {
    return {...order, tax: .19};
});
console.log(rta3);
console.log(orders);