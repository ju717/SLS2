from flask import Flask, request
import RPi.GPIO as GPIO
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

GPIO.setmode (GPIO.BCM)
GPIO.setup (37, GPIO.OUT)

def turn_on_pin():
    print(f"Pin turned on with akkustand")
    GPIO.output(37, GPIO.HIGH)

#jfasle
@app.route('/optimisiertesLaden', methods=['POST'])
@cross_origin()
def handle_akkustand():
    turn_on_pin() 
    return "Pin status updated (simulated)"

app.run(debug=True)