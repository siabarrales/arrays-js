//Some retorna true or false si al menos un elemento cumple con la condición
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(isEvenNumber);

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

//Hay alguna orden entregada?
const isDelivered = orders.some((order) => order.delivered);
console.log(isDelivered)

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19, 30),
    endDate: new Date(2021, 1, 1, 20, 30),
};

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')
//Se utilizara date-fns
//Metodo que revisa si dos fechas se solapan
const isOverlapping = (newDate) => {
    return dates.some((date) => {
        return areIntervalsOverlapping(
            { start: newDate.startDate, end: newDate.endDate },
            { start: date.startDate, end: date.endDate }
        );
    });
}

console.log('overlapping? :',isOverlapping(newAppointment));

