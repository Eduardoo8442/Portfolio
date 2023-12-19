// src/reducers/exampleReducer.js
const initialState = {
    // estado inicial
    showDetails: false,
  };
  
  const showDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'EMBED':
        console.log(action.payload)
        return {
          ...state,
          showDetails: action.payload,
        };
      // Adicione outros casos conforme necessário
      default:
        return state;
    }
  };
  
  export default showDetails;