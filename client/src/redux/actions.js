import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_CONTINENT = "GET_COUNTRIES_BY_CONTINENT";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER_COUNTRIES_A_Z = "ORDER_COUNTRIES_A_Z";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const BY_ACTIVITIES = "BY_ACTIVITIES";

export const getCountries = () =>{
    return async function(dispatch){
        const dataUrl = await axios.get("http://localhost:3001/countries");
        const countries = dataUrl.data;
        dispatch({type: GET_COUNTRIES, payload:countries})
    };
};

export const getCountriesByName = (name) =>{
    return async function(dispatch){
        const dataUrl = await axios.get(`http://localhost:3001/countries?name=${name}`);
        const countries = dataUrl.data;
        dispatch({type: GET_COUNTRY_BY_NAME, payload:countries})
    };
}

export const getCountriesByContintent = (payload) => {
    return {
      type: GET_COUNTRIES_BY_CONTINENT,
      payload,
    };
}

export const getDetail = (id) => {
    return async function(dispatch){
        const dataUrl = await axios.get(`http://localhost:3001/countries/${id}`);
        const country = dataUrl.data;
        dispatch({type: GET_DETAIL, payload:country})
    };
}

export const  orderCountriesA_Z = (payload) => {
    return {
        type: ORDER_COUNTRIES_A_Z,
        payload,
    }
}

export const  getActivities = () => {
    return async function(dispatch){
        try {
            const activitiesUrl = await axios.get("http://localhost:3001/activities");
            const activities = activitiesUrl.data;
            dispatch({type: GET_ACTIVITIES, payload:activities})
        } catch (e) {
            console.log(`Este es el error de getActivities ${e}`);
        }
    };
}

export const  byActivities = (payload) => {
    return {
        type: BY_ACTIVITIES,
        payload,
    }
}
