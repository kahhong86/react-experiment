
const GET_SAMPLE = "GET_SAMPLE";

const initialState = {
    sample: [],
    loading: true,
};



const sampleReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SAMPLE:
            console.log('hurray')
            return{
                
            }
        default:
            return state;
    }
};

export default sampleReducer;