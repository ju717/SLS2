import http from "http";
import onoff from "onoff";
const Gpio = onoff.Gpio;

const host = "192.168.178.165";
const portserver = 8080;

const Motor1LN3 = new Gpio(71, "out"); //
const Motor1LN4 = new Gpio(72, "out"); //
const Motor2LN1 = new Gpio(148, "out"); //
const Motor2LN2 = new Gpio(147, "out"); //
const Motor3LN1 = new Gpio(146, "out"); //
const Motor3LN2 = new Gpio(150, "out"); //
const Motor4LN3 = new Gpio(149, "out"); //
const Motor4LN4 = new Gpio(154, "out"); //

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/refill") {
    Motor1LN3.writeSync(0); // Turn on the LED
    Motor1LN4.writeSync(1);
    Motor2LN1.writeSync(0); // Turn on the LED
    Motor2LN2.writeSync(1);
    Motor3LN1.writeSync(0); // Turn on the LED
    Motor3LN2.writeSync(1);
    Motor4LN3.writeSync(0); // Turn on the LED
    Motor4LN4.writeSync(1); // Turn on the LED

    console.log("refill");

    res.end("refill\n");
  } else if (req.url === "/Kitkat") {
    Motor1LN3.writeSync(1); // Turn on the LED
    Motor1LN4.writeSync(0); // Turn on the LED

    console.log("Kitkat");

    res.end("Kitkat\n");
  } else if (req.url === "/Haribo") {
    Motor2LN1.writeSync(1); // Turn on the LED
    Motor2LN2.writeSync(0); // Turn on the LED

    console.log("Haribo");

    res.end("Haribo\n");
  } else if (req.url === "/MM") {
    Motor3LN1.writeSync(1); // Turn on the LED
    Motor3LN2.writeSync(0); // Turn on the LED

    console.log("M&M");

    res.end("M&M\n");
  } else if (req.url === "/Bueno") {
    Motor4LN3.writeSync(1); // Turn on the LED
    Motor4LN4.writeSync(0); // Turn on the LED

    console.log("Bueno");

    res.end("Bueno\n");
  } else if (req.url === "/off") {
    console.log("Led turned off");
    Motor1LN3.writeSync(0); // Turn on the LED
    Motor1LN4.writeSync(0); // Turn on the LED
    res.end("Motor turned off\n");
  } else {
    res.end("Invalid request\n");
  }
});

server.listen(portserver, host, () => {
  console.log(`Server is running on http://${host}:${portserver}`);
});