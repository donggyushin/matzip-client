import { Dispatch } from "redux";
import ErrorDispatchType from "./ErrorReducerActionTypes";

export const deleteError = () => (dispatch: Dispatch<ErrorDispatchType>) => {
 return dispatch({
  type: 'DELETE_ERROR'
 })
}
