import express from "express";
import bodyParser from "body-parser";
import { Customer, Order, OrderDetail, Product } from "./gestionComande.js";

const app = express();
const port = 3080;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Bonjour les simploniens");
});

app.post("/app", (req, res) => {
  const customer = new Customer();
  customer.createCustomer({ name: "Fatima", email: "fatima@gmail.com" });

  const p1 = new Product();
  p1.createProduct({ name: "Dress", quantity: 12, price: 200 });

  const p2 = new Product();
  p2.createProduct({ name: "Stylo", quantity: 4, price: 5 });

  const p3 = new Product();
  p3.createProduct({ name: "Mac", quantity: 5, price: 1000 });

  const d1 = new OrderDetail({ quantity: 2, price: p1.price, product: p1 });
  const d2 = new OrderDetail({ quantity: 1, price: p2.price, product: p2 });
  const d3 = new OrderDetail({ quantity: 2, price: p3.price, product: p3 });

  let result = [];

  const order = new Order();
  order.createOrder({
    date: new Date(),
    amount: 2405,
    customer: customer.getCustomer(),
    details: [d1, d2, d3],
  });

  result.push(order.getOrder());

  customer.editCustomer({ name: "Mohamed", email: "med@gmail.com" });

  order.editOrder({
    date: new Date(),
    amount: 2405,
    customer: customer.getCustomer(),
    details: [d1, d2, d3],
  });

  const association = {
    customer: customer.getCustomer(),
    p1: p1.getProduct(),
    p2: p2.getProduct(),
  };
  result.push(order.getOrder());

  const items = order.details;
  const p4 = new Product();
  p4.createProduct({ name: "Phone", quantity: 12, price: 200 });
  items.push(new OrderDetail({ quantity: 1, price: p4.price, product: p4 }));

  order.editOrder({
    date: new Date(),
    amount: 2405,
    customer: customer.getCustomer(),
    details: items,
  });

  let status = 200;
  let message = order;
  if (!order) {
    message = "Commande non trouvée";
    status = 400;
  }

  res.status(status).json({ order, result, association });
});

app.listen(port, () => {
  console.log(`L'application est en écoute sur le port ${port}`);
});
