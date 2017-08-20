const initialState = {
  showModal: false,
  file: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'upload/showModal':
      return {
        ...state,
        showModal: true,
      }
    case 'upload/hideModal':
      return {
        ...state,
        showModal: false,
        file: '',
        postWords: '',
      }
    case 'upload/fileAttach':
      return {
        ...state,
        file: action.payload
      }
    case 'upload/changeWords':
      return {
        ...state,
        postWords: action.payload,
      }
    default:
      return state
  }
}
