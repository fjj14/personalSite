const port = 3000,                              
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");
  
  router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/home.html", res);
  });
  
  router.get("/Resume.pdf", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.pdf);
    utils.getFile("views/Resume.pdf", res);
  });
  
  router.get("/home.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/home.css", res);
  });
 
  router.get("/scroll.js", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("/views/scroll.js", res);
  });
  router.get("/background.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/img/background.jpg", res);
  });
  router.get("/project1.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/img/project1.jpg", res);
  });
  router.get("/public/img/project2.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/project2.jpg", res);
  });
  router.get("/public/img/project3.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/img/project3.jpg", res);
  });
  
  http.createServer(router.handle).listen(port);          
  console.log(`The server is listening on
   port number: ${port}`);

   