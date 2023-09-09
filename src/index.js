const express = require("express")
const app = express()
const port = 3000 // You can change this port number if needed

const data = [
  {
    name: "Chadie Gil",
    age: "28",
    address: "USA",
  },
  {
    name: "Regene",
    age: "21",
    address: "Canada",
  },
]

// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.json(data)
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
