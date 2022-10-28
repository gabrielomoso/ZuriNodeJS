const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
  if (req.url === "/" || "/home" || "/index.html"){
    var filePath = path.join(__dirname, "index.html")
    fs.readFile(filePath, "utf8", (err, data) => {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.end(data)
    })
  }
  if (req.url === "/contact" || "/contact.html"){
    var filePath = path.join(__dirname, "contact.html")
    fs.readFile(filePath, "utf8", (err, data) => {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.end(data)
    })
  }
  if (req.url === "/about" || "/about.html"){
    var filePath = path.join(__dirname, "about.html")
    fs.readFile(filePath, "utf8", (err, data) => {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.end(data)
    })
  }

})


server.listen(4000, () => {
  console.log("server started at port 4000")
})
