import express from "express";

const app = express();

app.use(express.json()) //This line imp for post,put,delete api's and not for GET

const PORT = 5002;

/**
 * 1. Simple root route
 */

app.get("/", (req, res) => {
  res.send("This is meghana");
});

// app.get("/global", (req, res) => {
//   res.send("Hello Global");
//     res.json(userData)
// });


// app.post("/details",(req,res)=>{
//   let userData = req.body
//   console.log(userData)
//   res.json(userData)
// });


// app.post("/students"/"22U61A0513",(req,res) => {
//     res.send("Hello Meghana")
// });

//req.params

app.post("/students/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id)
    res.json(id)
})

// Start server

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});