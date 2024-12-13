const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Initialize Stripe with the secret key from environment variables
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

// Use CORS middleware to allow requests from any origin
app.use(cors({ origin: "*" }));


// Parse incoming JSON requests
app.use(express.json());

// Define a simple GET endpoint that returns a success message to check our app is served by firebase
app.get("/", (req, res) => {
  res.status(200).json({ Message: "success!" });
});

// Define a POST endpoint to create a payment intent using Stripe
app.post("/payment/create", async (req, res) => {
  const total = req.query.total; // Get the total amount from the query parameters
  if (total > 0) {
    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd"
    });
    // Respond with the payment intent
   res.status(201).json({
     clientSecret: paymentIntent.client_secret 
   });

    console.log(paymentIntent);
  } else {
    // Respond with an error if the total is not greater than 0
    res.status(400).json({ message: "total must be greater than 0" });
  }
});

// Export the Express app as a Firebase Cloud Function
app.listen(4000, (err) => {
  if (err) console.log(err);
  console.log(`successfully listened on port &{PORT}:http://localhost:&{PORT}`);
});
