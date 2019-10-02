import requests
from models.Person import Person
from models.Starship import Starship
from models.Vehicle import Vehicle
from models.HomeWorld import HomeWorld
import json
import pandas as pd


class SearchController:
    def handleSearch(self, search_query):
        # TODO check local cache by CSV perferred
        r = requests.get(
            url='https://swapi.co/api/people/?search='+search_query)
        data = r.json()
        # check the len of result if ==1 return just the person result else return the list of person result
        if(len(data['results'])) == 1:
            person_name = data['results'][0]['name']
            person_gender = data['results'][0]['gender']
            # json reponse back for starship is all in url hence to get all the list of the urls prep for another get request
            star_ship_urls = data['results'][0]['starships']
            # json response back for vehicle is all in url hence get all the list of urls prep for another get request
            vehicle_urls = data['results'][0]['vehicles']
            # json reponse back for homeworld is a url hence get the url information into a model
            homeworld_url = data['results'][0]['homeworld']
            starships = []
            vehicles = []
            if(len(star_ship_urls) != 0):
                # loop to get all the starship belongs to that person
                for i in star_ship_urls:
                    star_ship_request = requests.get(url=i)
                    starship_json = star_ship_request.json()
                    starship = Starship(starship_json['name'],
                                        starship_json['model'],
                                        starship_json['starship_class'],
                                        starship_json['hyperdrive_rating'],
                                        starship_json['cost_in_credits'],
                                        starship_json['manufacturer']
                                        )
                    starships.append(starship.__dict__)
            if(len(vehicle_urls) != 0):
                # loop to get all the vehicle list
                for j in vehicle_urls:
                    vehicle_request = requests.get(url=j)
                    vehicle_json = vehicle_request.json()
                    vehicle = Vehicle(vehicle_json['name'],
                                      vehicle_json['model'],
                                      vehicle_json['cost_in_credits'])
                    vehicles.append(vehicle.__dict__)

            homeworld_request = requests.get(url=homeworld_url)
            homeworld_json = homeworld_request.json()
            homeworld = HomeWorld(
                homeworld_json['name'], homeworld_json['population'], homeworld_json['climate'])

            person_info = Person(person_name, person_gender,
                                 starships, vehicles, homeworld.__dict__)
            return json.dumps(person_info.__dict__)
