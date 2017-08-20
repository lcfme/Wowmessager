const initState = {

}

export default (state = initState, action) => {
  switch (action.type) {
    case 'moments/fetched':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
