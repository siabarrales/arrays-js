const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);

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

const rta = orders.filter((order) => order.delivered && order.total > 100);
console.log(rta);

const search = (query) => {
    return orders.filter((order) => {
        return order.customerName.toLowerCase().includes(query.toLowerCase());
    });
}

console.log(search('nico'));
