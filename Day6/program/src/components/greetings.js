export default function Greeting(){
    return (
        <>
            <h1>Hello from Parent</h1>
        </>
    );
};

let prices = [30,40,555,130];
let filtered_prices = prices.filter((price) => price % 2 == 0);
console.log(filtered_prices);


const items = [
    {name: 'Bike', price: 100000},
    {name: 'TV', price: 20000},
    {name: 'Phone', price: 50000},
]

items.forEach((item) => {
    console.log(item);
    console.log(item.name);
    console.log(item.price);
});

items.map((item) => {
    console.log(item.name);
})

const raw_prices = [22.4555, 77.9999, 33.3333];
// 22.45, 77.99, 33.33 
const formatted_prices = raw_prices.map((price) => {
    return price.toFixed(2);
});
console.log(formatted_prices);
