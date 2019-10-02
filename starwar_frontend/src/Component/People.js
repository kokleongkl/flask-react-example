import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 575
  }
}));

const People = props => {
  const classes = useStyles();
  if (props.people !== null) {
    const people = JSON.parse(props.people);
    const starship = people.star_ships;

    const vehicle = people.vehicles;

    const homeworld = people.homeworld;
    console.log(homeworld);

    return (
      <div>
        {props.people ? (
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="p">
                Name:
              </Typography>
              <Typography component="p">{people.name}</Typography>
              <Typography gutterBottom variant="h6" component="p">
                Gender:
              </Typography>
              <Typography component="p">{people.gender}</Typography>
              <Typography gutterBottom variant="h6" component="p">
                Starship:
              </Typography>
              {starship.length === 0 && (
                <Typography component="p">-</Typography>
              )}
              {starship.length > 0 && (
                <Typography component="p">
                  {" "}
                  {starship.map(user => (
                    <ul>
                      <li key={user.name}>name:{user.name}</li>
                      <li key={user.name}>model:{user.model}</li>
                      <li key={user.name}>
                        starship class:{user.starship_class}
                      </li>
                      <li key={user.name}>
                        hyperdrive rating:{user.hyperdrive_rating}
                      </li>
                      <li key={user.name}>cost in credits:{user.cost}</li>
                      <li key={user.name}>manufacturer:{user.manufacturer}</li>
                    </ul>
                  ))}
                </Typography>
              )}
              <Typography gutterBottom variant="h6" component="p">
                Vehicle:
              </Typography>
              {vehicle.length === 0 && <Typography component="p">-</Typography>}
              {vehicle.length > 0 && (
                <Typography component="p">
                  {" "}
                  {vehicle.map(user => (
                    <ul>
                      <li key={user.name}>name:{user.name}</li>
                      <li key={user.name}>model:{user.model}</li>
                      <li key={user.name}>cost in credits:{user.cost}</li>
                    </ul>
                  ))}
                </Typography>
              )}
              <Typography gutterBottom variant="h6" component="p">
                Homeworld:
              </Typography>
              {homeworld === null && <Typography component="p">-</Typography>}
              {homeworld !== null && (
                <ul>
                  <li key={homeworld.name}>name:{homeworld.name}</li>
                  <li key={homeworld.population}>
                    population:{homeworld.population}
                  </li>
                  <li key={homeworld.climate}>climate:{homeworld.climate}</li>
                </ul>
              )}
            </CardContent>
          </Card>
        ) : null}
      </div>
    );
  } else {
    return "No people found";
  }
};
export default People;
