/*import http from "http";
import onoff from "onoff";
import cors from "cors";
const Gpio = onoff.Gpio;
import io from "socket.io-client";

const host = "localhost";
const portserver = 8080;

const socket = io("http://localhost:3001");

const corsOptions = {
  origin: '*', // Allow requests from any origin, you can specify specific origins instead
  methods: 'OPTIONS, GET',
  maxAge: 2592000, // 30 days
  allowedHeaders: 'Content-Type',
};

const server = http.createServer((req, res) => {
  console.log("Server created");
  //const optimiertesLaden = new Gpio(71, "out");

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.writeHead(204, corsOptions);
    res.end();
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Apply CORS headers
  cors(corsOptions)(req, res, () => {});

  if (req.url == "/optimisierenAn") {

    akkustandl = 0;
    console.log(`Request to optimisierenAn`);
    socket.on("akkustand", (akkustand) => {
      akkustandl = akkustand
      
    });

    while(akkustandl >= 80){
      //optimiertesLaden.writeSync(1); // Turn on the Strom request to python
      console.log("Optimiertes Laden an");  
      res.end("Optimiertes Laden an\n");
    }
    while(akkustandl < 80){
     // optimiertesLaden.writeSync(0);
    }
  }
  else {
    res.end("Invalid request\n");
  }
});

server.listen(portserver, host, () => {
  console.log(`Server is running on http://${host}:${portserver}`);
});
*/