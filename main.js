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
  router.get("/personal", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/personal.html", res);
  });
  
  router.get("/Work", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/Projects.html", res);
  });
  router.get("/skills", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/skills.html", res);
  });
  router.get("/Resume.pdf", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.pdf);
    utils.getFile("views/Resume.pdf", res);
  });
  router.get("/contact", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
  });
  router.get("/home.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/home.css", res);
  });
  router.get("/personal.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/personal.css", res);
  });
  
  router.get("/skills.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/skills.css", res);
  });
  router.get("/projects.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/projects.css", res);
  });
  router.get("/Bitmoji.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/img/Bitmoji.png", res);
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
  router.get("/project2.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/img/project2.jpg", res);
  });
  router.get("/project3.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/img/project3.jpg", res);
  });
  router.get("/public/img/seal.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/seal.png", res);
  });
  router.get("/public/img/Premiere.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/Premiere.png", res);
  });
  router.get("/public/img/Maya.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/img/Maya.jpg", res);
  });
  router.get("/public/img/imovie.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/img/imovie.jpg", res);
  });
  router.get("/public/img/blender.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/blender.png", res);
  });
  router.get("/public/img/ftc.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/ftc.png", res);
  });
  router.get("/public/img/java.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/java.png", res);
  });
  router.get("/public/img/javascript.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/javascript.png", res);
  });
  router.get("/public/img/CSS.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/CSS.png", res);
  });
  router.get("/public/img/html.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/html.png", res);
  });
  router.get("/public/img/python.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/python.png", res);
  });
  router.get("/public/img/idtech.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/img/idtech.png", res);
  });
  http.createServer(router.handle).listen(port);          2
  console.log(`The server is listening on
   port number: ${port}`);

    /**     plainTextContentType = {
        "Content-Type": "text/plain"
      },
      htmlContentType = {
        "Content-Type": "text/html"
      },
      customReadFile = (file, res) => {                        1
        fs.readFile(`./${file}`, (errors, data) => {
          if (errors) {
            console.log("Error reading the file...");
          }
          res.end(data);
        });
      };
    
    router.get("/", (req, res) => {                            2
      res.writeHead(httpStatusCodes.OK, plainTextContentType);
      res.end("INDEX");
    });
    router.get("/index.html", (req, res) => {
      res.writeHead(httpStatusCodes.OK, htmlContentType);
      customReadFile("views/index.html", res);
    });
    
    router.post("/", (req, res) => {
      res.writeHead(httpStatusCodes.OK, plainTextContentType);
      res.end("POSTED");
    });
    
    http.createServer(router.handle).listen(3000);             3
    console.log(`The server is listening on port number:
     ${port}`);
    routeMap ={
          "/":"views/home.html",
          "/portfolio/workExperience":"views/portfolio/workExperience.html",
          "/interest":"views/interest.html",
          "/education":"views/education.html",
          "/contact":"views/contact.html",
          "/about":"views/about.html",
          "/portfolio":"views/portfolio/Portfolio.html",
          "/portfolio/stem":"views/portfolio/STEM.html",
          "/portfolio/socialJustice":"views/portfolio/socialJustice.html",
          "/blog/travel":"views/blog/Travel.html",
          "/blog":"views/blog/Blog.html",
          "/blog/running":"views/blog/running.html",
          "/blog/dataPrivacy":"views/blog/DataPrivacy.html",
          "/resume.pdf":"/views/Resume.pdf"
      };
    app = http.createServer((request, res)=> {
    let url = request.url; 
     if (url.indexOf(".js") !== -1) {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/javascript"
        });
        customReadFile(`./public/js${url}`, res);
      } else if (url.indexOf(".css") !== -1) {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/css"
        });
        customReadFile(`./public/css${url}`, res);
      } else if (url.indexOf(".pdf") !== -1) {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "application/pdf"
        });
            customReadFile(`./views${url}`, res);
        //customReadFile(`./views${url}`, res);
      } else {
         if(routeMap[request.url]){
           fs.readFile(routeMap[request.url], (error, data)=>
            {
                if(routeMap[request.url].indexOf(".pdf")!=-1)
                {

                }
                res.end(data);
         });
         }else{
             res.end("<h1>Sorry not Found</h1>");
         }
        }
     });
     app.listen(port);
     console.log("Listening on port: "+port);
     const customReadFile = (file_path, res) => {           6
        if (fs.existsSync(file_path)) {                      7
          fs.readFile(file_path, (error, data) => {
            if (error) {
              console.log(error);
              sendErrorResponse(res);
              return;
            }
            res.write(data);
            res.end();
          });
        } else {
          res.end("<h1>You landed on jupiter</h1>");
        }
    };**/