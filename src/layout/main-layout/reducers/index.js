const initialState = {
  testState: 'Hello World',
  isFetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'mainLayout/test':
      return {
        ...state,
        testState: action.payload
      }
    case 'mainLayout/fetchStart':
      return {
        ...state,
        isFetching: true,
      }
    case 'mainLayout/fetchEnd':
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
