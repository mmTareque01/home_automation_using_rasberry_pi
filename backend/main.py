from crypt import methods
from distutils.log import debug
from flask import Flask, jsonify, request
from flask_restful import Api, Resource
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/controller', methods=['POST'])
def controller():
    print(json.loads(request.data))
    return "Welcome to the flask world"


if __name__ == "__main__":
    app.run(debug=False)


# import RPi.GPIO as GPIO

# GPIO.setmode(GPIO.BOARD)

# GPIO.setup(3, GPIO.OUT, initial=False)

#GPIO.output(3, True)