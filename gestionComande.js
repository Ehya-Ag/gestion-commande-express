export class Customer {
  constructor() {}
  
  createCustomer(customer) {
    this.name = customer.name;
    this.email = customer.email;
    console.log(`Client : ${this.name}, ${this.email} a été créé`);
  }
  
  destroyCustomer() {
    console.log(`Client : ${this.name}, ${this.email} a été supprimé`);
  }
  
  editCustomer(newCustomer) {
    this.name = newCustomer.name;
    this.email = newCustomer.email;
    console.log(`Client : ${this.name}, ${this.email} a été mis à jour`);
  }
  
  getCustomer() {
    console.log(`Client : ${this.name}, ${this.email}`);
    return { name: this.name };
  }
}

export class Product {
  constructor() {}
  
  createProduct(product) {
    this.name = product.name;
    this.quantity = product.quantity;
    this.price = product.price;
    console.log(`Produit : ${this.name} a été créé`);
  }
  
  destroyProduct() {
    console.log(`Produit : ${this.name} a été supprimé`);
  }
  
  editProduct(newProduct) {
    this.name = newProduct.name;
    this.quantity = newProduct.quantity;
    this.price = newProduct.price;
    console.log(`Produit : ${this.name} a été mis à jour`);
  }
  
  getProduct() {
    console.log(`Produit : ${this.name}`);
    return { name: this.name, quantity: this.quantity, price: this.price };
  }
}

export class OrderDetail {
  constructor(quantity, price, product) {
    this.quantity = quantity;
    this.price = price;
    this.product = product;
  }
}

export class Order {
  constructor() {}
  
  createOrder(order) {
    this.date = order.date;
    this.amount = order.amount;
    this.details = order.details;
    this.customer = order.customer;
    console.log(`Commande a été créée`);
  }
  
  destroyOrder() {
    this.date = null;
    console.log(`Commande a été supprimée`);
  }
  
  editOrder(newOrder) {
    this.date = newOrder.date;
    this.amount = newOrder.amount;
    this.details = newOrder.details;
    this.customer = newOrder.customer;
    console.log(`Commande a été mise à jour`);
  }
  
  getOrder() {
    return {
      date: this.date,
      amount: this.amount,
      details: this.details.length,
      customer: this.customer.name,
    };
  }
}
