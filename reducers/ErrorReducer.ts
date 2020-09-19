import ErrorDispatchType from "../actions/ErrorReducerActionTypes"

interface InitialState {
 error: string
}

const initialState: InitialState = {
 error: ''
}

const ErrorReducer = (state = initialState, action: ErrorDispatchType): InitialState => {
 switch (action.type) {
  case 'DELETE_ERROR':
   return deleteError(state, action)
  case 'POST_ERROR':
   return postError(state, action)
  default:
   return state
 }
}

const deleteError = (state: InitialState, action: ErrorDispatchType): InitialState => {
 if (action.type !== 'DELETE_ERROR') return state
 return {
  ...state,
  error: ''
 }
}

const postError = (state: InitialState, action: ErrorDispatchType): InitialState => {
 if (action.type !== 'POST_ERROR') return state
 const error = action.payload
 return {
  ...state,
  error
 }
}

export default ErrorReducer