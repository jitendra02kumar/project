
const http = require("http");
const fs = require("fs");
const path = require("path");


const port = 8070;
const app = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile("./public/index.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "utf-8" });
            res.end(html);
        })
    }
    else if (req.url == "/about") {
        fs.readFile("./public/about.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "utf-8" });
            res.end(html);
        })
    }
    else if (req.url == "/contact") {
        fs.readFile("./public/contact.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "utf-8" });
            res.end(html);
        })
    }

    else if (req.url.match("\.css")) {
        const mypath = path.join(__dirname, "public", req.url)
        // console.log(`${mypath}`);
        const pathread = fs.createReadStream(mypath,);
        // res.writeHead(200, { "Content-Type": "text/css" });
        pathread.pipe(res);
    }

    else if (req.url.match("\js")) {
        const mypath = path.join(__dirname, "public", req.url);
        const readpath = fs.createReadStream(mypath);
        //res.writeHead(200);
        readpath.pipe(res);
    }

    else if (req.url.match("\.jpg")) {
        const mypath = path.join(__dirname, "public", req.url);
        console.log(mypath);
        const readpath = fs.createReadStream(mypath);
        // res.writeHead(200)
        readpath.pipe(res);
    }


    else {
        fs.readFile("./public/error.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "utf-8" });
            res.end(html);
        })
    }


})
app.listen(port,
    console.log("server is runing 8070")
);