import requests
import json
from flask import Flask, request, abort
from flask_cors import CORS
from controllers.SearchController import SearchController
from flask_restful import Resource, Api

# init flask resources
application = Flask(__name__)
api = Api(application)
CORS(application)


# api for searching
class search_API(Resource):
    def post(self):
        # get params from form
        json_data = request.get_json()
        search_input = json_data['name']
        if(len(search_input) <= 1):
            abort(400)
        # go into controller to grab information
        searchContoller = SearchController()
        result = searchContoller.handleSearch(search_input)
        return result


api.add_resource(search_API, '/api/search')

if __name__ == "__main__":
    application.run(debug=False)
