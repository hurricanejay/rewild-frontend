import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMyPlants } from '../action/actionCreator'
import Plants from '../components/plant'
import Search from "../components/search";

function MyPlants(props) {
  const { getMyPlants, user, myPlants } = props;
  const [ userPlants, setUserPlants ] = useState(null)

  useEffect(() => {
    getMyPlants(user ? user.id : null)
  }, [getMyPlants, user, myPlants]);

  const search = (input) => {
    setUserPlants(myPlants.filter(userPlant => {
      return userPlant.plant.name.includes(input)
    }))
  }

  return (
    <div className="my-plants">
      My Plants
      <Search onClick={search} />
      {userPlants ? userPlants.map(userPlant => <Plants key={userPlant.id} userPlant={userPlant} />) : myPlants.map(userPlant => <Plants key={userPlant.id} userPlant={userPlant} />)}
    </div>
  );
}

const msp = state => {
  return {
    user: state.user,
    myPlants: state.myPlants
  };
};

const mdp = dispatch => {
  return {
    getMyPlants: (userId) => dispatch(getMyPlants(userId))
  };
};

export default connect(msp, mdp)(MyPlants);
