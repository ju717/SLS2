from flask import Flask, request
import RPi.GPIO as GPIO

app = Flask(__name__)

GPIO.setmode (GPIO.BCM)
GPIO.setup (37, GPIO.OUT)

def turn_on_pin():
    print(f"Pin turned on with akkustand")
    GPIO.output(37, GPIO.HIGH)


@app.route('/optimisiertesLaden', methods=['POST'])
def handle_akkustand():
    turn_on_pin()
    return "Pin status updated (simulated)"
app.run(debug=True)