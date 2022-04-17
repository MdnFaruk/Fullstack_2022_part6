import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: { 
    setNotification(state, action) { 
      const message = action.payload
      return message
    },
    removeNotification(state, action) {
      return null
    },
    
  }
})

let timeOutId
export const notificationHandler = (message, timer) => {
  
  return dispatch => {
    dispatch(setNotification(message))
    clearTimeout(timeOutId)
    timeOutId = setTimeout(() => {
      dispatch(removeNotification())
    }, timer * 1000)
  }
}

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
