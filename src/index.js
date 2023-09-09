const express = require("express")
const app = express()
const port = 3000 // You can change this port number if needed

// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello, World!")
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
