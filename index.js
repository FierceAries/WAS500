const port = 3000;
const http = require("http");
const httpStatusCodes = require("http-status-codes");
const router = require("./router");
const fs = require("fs");


const plainTextContentType = {
  "Content-Type": "text/plain",
};
const htmlContentType = {
  "Content-Type": "text/html",
};
const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});


router.get("/public/images/PMAT.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, "image/jpeg");
  customReadFile(req.url, res);
});
router.get("/public/images/THE_RACE_for_lost.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, "image/jpeg");
  customReadFile(req.url, res);
});
router.get("/public/images/HP.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, "image/jpeg");
  customReadFile(req.url, res);
});

router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});

router.get("/Bookslist.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/Bookslist.html", res);
});

router.get("/contactus.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/contactus.html", res);
});

router.get("/surveypage.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/surveypage.html", res);
});

router.get("/hp.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/hp.html", res);
});

router.get("/pmat.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/pmat.html", res);
});

router.get("/race.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/race.html", res);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});
http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);