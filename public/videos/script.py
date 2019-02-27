import os
import json

path = os.getcwd()

data = []

for root, subfolders, filenames in os.walk(path):
    for videoname in filenames:
        data.append({"videoname":videoname})

json_data = json.dumps(data,indent=1)

print json_data

json_file = open("data.json","w")
json_file.write(json_data)
json_file.close()

