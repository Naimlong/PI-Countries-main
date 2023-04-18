import { GET_COUNTRIES, 
    GET_COUNTRIES_BY_CONTINENT, 
    GET_COUNTRY_BY_NAME,
    GET_DETAIL,
    ORDER_COUNTRIES_A_Z,
    GET_ACTIVITIES,
    BY_ACTIVITIES
} from "./actions";

const initialState = {
    countries: [],
    allCountries: [],
    allActivities: [],
    activity: [],
    detail: [],
};

const roootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload, allCountries: action.payload,}
        
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: action.payload,
              };

        case GET_COUNTRIES_BY_CONTINENT:
            const allCountries = state.allCountries;
            const countriesFiltered =
            action.payload === "all"
                ? allCountries
                : allCountries.filter((e) => e.continents === action.payload);
                return {
                    ...state,
                    countries: countriesFiltered,
                };

        case GET_DETAIL:
            console.log(action.payload);
            return{
                ...state,
                detail: action.payload,
            };
        case ORDER_COUNTRIES_A_Z:
            let name = state.allCountries;
            let orderPayload =
            action.payload === "ascd"
              ? name.sort((a, b) => {
                  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                  return 0;
                })
              : name.sort((a, b) => {
                  if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                  if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
    
                  return 0;
                });
            return {
                ...state,
                countries: orderPayload,
            };

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        
        case BY_ACTIVITIES:
            const allActivities = state.allActivities;
            const activityFilter = action.payload === 'all' ? allActivities.filter(e => e.activities.length > 0) :
                allActivities.filter(c => c.activities.find((element) => element.name.toLowerCase() === action.payload))
            return {
                ...state,
                countries: activityFilter
            }

        default:
            return { ...state };
    }
};

export default roootReducer;