const initialState = {
  testState: 'Hello World'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'mainLayout/test':
      return {
        ...state,
        testState: action.payload
      }
    default:
      return state
  }
}
