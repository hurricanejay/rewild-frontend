import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyPlants } from '../action/actionCreator'
import Plants from '../components/plant'

function MyPlants(props) {

  const { getMyPlants, user } = props;

  useEffect(() => {
    getMyPlants(user ? user.id : null)
  }, [getMyPlants, user]);



  return (
    <div className="my-plants"> 
    My Plants
    {props.myPlants && props.myPlants.map(userPlant => <Plants key={userPlant.id} userPlant={userPlant}/>)}
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
