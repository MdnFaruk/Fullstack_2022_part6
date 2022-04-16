import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

/* export const addVote = (id) =>{
  return {
    type: 'NEW_VOTE',
    data: { id }
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: asObject(anecdote)
  }
} */

const initialState = anecdotesAtStart.map(asObject)

/* const reducer = (state = initialState, action) => {
  switch(action.type){

    case 'NEW_VOTE':
      const id = action.data.id
      const findAnecdote = state.find(anecdote => anecdote.id === id)
      const changedAnecdoteVote = {...findAnecdote, votes: findAnecdote.votes + 1 }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdoteVote)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    default: 
      return state
  }
} */

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: { 
    createAnecdote(state, action) { 
      const anecdote = asObject(action.payload)
      /* return [...state, anecdote] */
      state.push(anecdote)
    },
    addVote(state,action){
      const id = action.payload
      const findAnecdote = state.find(anecdote => anecdote.id === id)
      const changedAnecdoteVote = {...findAnecdote, votes: findAnecdote.votes + 1 }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdoteVote)
    },
    
  }
})

export const { createAnecdote, addVote, notificationReducer } = anecdoteSlice.actions
export default anecdoteSlice.reducer
/* export default reducer */