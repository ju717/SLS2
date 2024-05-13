import http from "http";
import onoff from "onoff";
const Gpio = onoff.Gpio;

const host = "192.168.1.120";
const portserver = 8080;

const optimiertesLaden = new Gpio(71, "out"); //

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url == "/optimisierenAn") {
    if(akkustand >= 80){
      optimiertesLaden.writeSync(1); // Turn on the Strom
    }
    else{
      optimiertesLaden.writeSync(0);
    }
    console.log("Optimiertes Laden an");
  }
  else {
    res.end("Invalid request\n");
  }
});

server.listen(portserver, host, () => {
  console.log(`Server is running on http://${host}:${portserver}`);
});