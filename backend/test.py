import requests

BASE_URL = 'http://127.0.0.1:5000'

getRequest = requests.get(BASE_URL + "/")

print(getRequest.content)