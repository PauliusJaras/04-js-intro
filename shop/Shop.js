class Shop {

    constructor(name, currency){
        this.name = name;
        this.currency = currency;
        this.products = [];
        this.cart = [];
        this.summary = {
            itemsSold: 0,
            orderCompleted: 0,
            orderInProgress: 0,
            profit: 0,
            possibleProfit: 0
        };
    };

    intro() {
        const res = `Hi, we are ${this.name}.\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`;
        console.log(res);
        return res;
    };

    addItem(...variables) {
        const [product, price] = variables;
        const formatedPrice = this.formatPrice(price);
        if(this.products.length == 0){
        this.products.push({
            name: product,
            price: formatedPrice,
            id: 1
        });
    } else{
        const id = this.products.at(-1).id+1;
        this.products.push({
            name: product,
            price: formatedPrice,
            id: id
        });
    }
        const res = `"${this.name}" sells ${product} for ${formatedPrice} ${this.currency} now!`;

        console.log(res);
        return res;
    };

    items() {
        const title = `Items for sale at "${this.name}"`;
        const line = `====================`;
        let list = ``;

        for(const [index, {name, price}] of this.products.entries()){
            const capitalizedWord = this.capitalize(name);
            list += `${index+1}) ${capitalizedWord} - ${price} ${this.currency} \n`;
        };

        const res = title + "\n" + line + "\n" + list + line;
        console.log(res);
        return res;
    };

    updatePrice(product, newPrice){
        const entry = this.products.find(item => item.name == product);
        entry.price = this.formatPrice(newPrice);
        const res = `"${this.name}" updated price and sells ${entry.name} for ${entry.price} ${this.currency} now!`;
        console.log(res);
        return res;
    }

    createCart(owner){
        this.cart.push({owner: owner, items: []});
        const res = `${owner} have an open cart at "${this.name}"`;
        console.log(res);
        this.summary.orderInProgress++;
        return res;
    }

    addItemToCart(owner, productId, quantity){
        const entry = this.cart.find(order => order.owner == owner);
        if(entry.payStatus == 1){
            console.log("You can not add items to already paid cart!");
            return 0;
        }
        if(this.products.find(item => item.id == productId)){
        entry.items.push({id: productId, count: quantity});
    } else{
        console.log("Item is out of stock!");
        return 0;
    }
        //console.log(entry); 
    }

    order(owner){
        const entry = this.cart.find(order => order.owner == owner);
        console.log(entry);
    }

    orderPrice(owner){
        const entry = this.cart.find(order => order.owner == owner);
        let totalCost = 0;
        for (const item of entry.items){
            const productId = item.id;
            const productQuantity = item.count;
            const productPrice = this.products.find(product => product.id == productId).price * productQuantity;
            totalCost += productPrice;
        }
        const res = `${owner} order: ${totalCost.toFixed(2)} ${this.currency}.`;
        console.log(res);
        entry.cost = totalCost.toFixed(2);
        console.log(entry);
        return res;
    }

    removeItem(item){
        const arr = this.products;
        arr.splice(arr.findIndex(el => el.name == item), 1);
        const res = `No more ${item} at "${this.name}"!`;
        console.log(res);
        return res;
    }

    pay(owner, sum){
        const entry = this.cart.find(order => order.owner == owner);
        const payment = (sum / 100).toFixed(2);
        if(payment < entry.cost){
            console.log("Need more money!");
            return 0;
        } else if(payment == entry.cost){
            console.log(`Thank you for purchasing at "${this.name}"`);
            entry.payStatus = 1;
            this.summary.profit += entry.cost;
            this.summary.orderCompleted++;
            this.summary.orderInProgress--;
        } else{
            const change = (payment - entry.cost).toFixed(2);
            console.log(`Here is your ${change} ${this.currency}!\nThank you for purchasing at "${this.name}"`);
            entry.payStatus = 1;
            this.summary.profit += entry.cost;
            this.summary.orderCompleted++;
            this.summary.orderInProgress--;
        }
    }

    shopSummary(){
        const res = 
        `====================\nSummary for the "${this.name}"\nItems sold: ${this.summary.itemsSold}\nOrder completed: ${this.summary.orderCompleted}\nOrder in progress: ${this.summary.orderInProgress}\nProfit: ${this.summary.profit}\nPossible Profit: ${this.summary.possibleProfit}\n====================`;

        console.log(res);
        return res;
    }

    formatPrice(price) {
        const formatedPrice = (price / 100).toFixed(2);
        return formatedPrice;
    };

    capitalize(word){
        const capitalizedWord = word[0].toUpperCase() + word.slice(1); 
        return capitalizedWord;
    };
}


export { Shop }