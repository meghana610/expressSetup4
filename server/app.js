import express from "express";

const app = express();
app.use(express.json()) //This line imp for post,put,delete api's

const PORT = 5002;

/**
 * 1. Simple root route
 */

app.get("/", (req, res) => {
  res.send("This is meghana");
});

app.post("/details",(req,res)=>{
  let userData = req.body
  console.log(userData)
});


// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});