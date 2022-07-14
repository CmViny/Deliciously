// Variables
const express = require("express");  
const app = express();
const cors = require("cors");
const PORT = 8080;
const bcrypt = require("bcrypt");

const users = [];

// Middlewares

app.use(express.json());
app.use(cors());

// Register

app.post("/register", async (req, res) => {       // POST DATA => /register 
  try { 
    const hashPassword = await bcrypt.hash(req.body.password, 10);  // Hash password
    const user = { email: req.body.email, password: hashPassword }; // Recupérer les datas
    users.push(user);     // PUSH dans l'array users 
    res.status(200).json({ message: "Successful Register !", status: 200});   // Message success
  } catch {
    res.status(500).json({ message: "Error", status: 500});   // Message error
  }
});

// Login

app.post("/login", async (req, res) => {
  let user = users.find((users) => users.email == req.body.email);

  if (!user) return res.status(200).json({ message: "Invalid Email or Password.", status: 400});

  const validPassword = await bcrypt.compare(req.body.password, user.password);   // Compare les password hasher

  if (!validPassword) return res.status(200).json({ message: "Invalid Email or Password.", status: 400});
  else res.status(200).json({ message: "Successful connection!", status: 200 });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

