const filter = (state = {text: ''}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      return {...state, text: action.text};

    default: return state;
  }
};

export default filter;