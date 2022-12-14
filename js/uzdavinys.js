console.groupCollapsed("Parduotuves uzdavinys");

const valiuta = 'EUR';
const prekes = [
    {
    name: 'Bananas',
    price: 2,
    inStock: 10,
    },
    {
    name: 'Agurkas',
    price: 3,
    inStock: 10,
    },
    {
    name: 'Pomidoras',
    price: 1.57,
    inStock: 30,
    }
];

function shop(products, currency){
    let result = 0
    console.log("Musu parduotuve");
    console.log("---------------");
    
    products.forEach((product, index) => {
        let count = index +1;
        let price = Number(product.price).toFixed(2);
        result += price * product.inStock;
        console.log(`${count}) ${product.name} kainuoja ${price} ${currency} ir turime ju ${product.inStock} vienetu.`);
    });
    console.log("---------------");
    console.log(`Viso asortimento kaina: ${Number(result).toFixed(2)} ${currency}`);
}

shop(prekes,valiuta);

console.groupEnd();