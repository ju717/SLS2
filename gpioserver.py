from flask import Flask, request
import RPi.GPIO as GPIO
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

GPIO.setmode(GPIO.BCM)
GPIO.setup (37, GPIO.OUT)
GPIO.output(37, GPIO.HIGH)
# @cross_origin()

def turn_on_pin():
    print(f"Pin turned on with akkustand")
    GPIO.output(37, GPIO.LOW)

@app.route('/optimisiertesLaden', methods=['GET'])
def handle_akkustand():
    turn_on_pin() 
    return "Pin status updated (simulated)"

app.run(debug=True)