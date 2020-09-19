export const POST_ERROR = 'POST_ERROR'
export const DELETE_ERROR = 'DELETE_ERROR'

export interface postError {
 type: typeof POST_ERROR
 payload: string
}

interface deleteError {
 type: typeof DELETE_ERROR
}

type ErrorDispatchType = postError | deleteError

export default ErrorDispatchType