import express from "express";

const app = express();

app.listen(8080, (req, res) => {
  console.log("Server running");
});

app.use(express.json());

let products = [];
// app.post("/", (req, res) => {
//   //   let name = req.body.name;
//   //   let price = req.body.price;
//   //   products.push({ name, price });
//   //   products.push(req.body);
//   //   res.send("Product created");
//   res.send(name);
// });

app.post("/", (req, res) => {
  try {
    const { id, name, price } = req.body; //destructuring
    const found = products.find((product) => product.id === id);
    if (found) res.send("Product Already Exists");
    else {
      products.push({ id, name, price });
      res.status(201).json({ message: "Product added" });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong!" });
  }
});

app.get("/", (req, res) => {
  res.json(products);
});

//Delete

/*
app.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = products.find((product) => product.id === id);
  if (found) {
    products.splice(found.id, 1);
    res.json("Product deleted");
  } else {
    res.send("Product doesn't exist");
  }
});
*/

// Another Method for delete

app.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    products = products.filter((product) => product.id !== id);
    res.json("Product deleted");
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
});

//Patch Method
app.patch("/:id/:price", (req, res) => {
  try {
    const id = Number(req.params.id);
    const price = Number(req.params.price);
    const found = products.find((product) => product.id === id);
    if (found) {
      found.price = price;
      res.status(201).json({ message: "Price Updated", product: found });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
