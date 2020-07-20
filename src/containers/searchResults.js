import React, { useEffect } from "react";
import { connect } from 'react-redux'
import PlantCard from "../components/plantCard";
import { getSearchPlants } from "../action/actionCreator";

function SearchResults(props) {
    const { getSearchPlants, location } = props

    useEffect(() => {
        const search = location.pathname.split('/')[2]
        getSearchPlants(search)
    }, [getSearchPlants, location])

    return (
        <div>
            Search Result
            {props.searchPlants.map(plant => <PlantCard key={plant.id} plant={plant} history={props.history} />)}
        </div>
    )
}

const msp = state => {
    return {
        searchPlants: state.searchPlants
    }
}

const mdp = dispatch => {
    return {
        getSearchPlants: (searchInput) => dispatch(getSearchPlants(searchInput))
    }
}

export default connect(msp, mdp)(SearchResults);