import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = () => {
    const anecdotes = useSelector(
        ({anecdotes,filterAncedotes}) => 
        filterAncedotes ? 
        anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterAncedotes.toLowerCase()))
        :
        [...anecdotes].sort((first, second) => second.votes - first.votes) 
    )
    
    const dispatch = useDispatch()

    const vote = async (id) => {
        const anecdote = anecdotes.find(anecdote => anecdote.id === id)
        const updateAnecdote = await anecdoteService.update(id, {...anecdote, votes: anecdote.votes + 1 })
        dispatch(addVote(updateAnecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`))
    }

    return (
        <div>
            {
                anecdotes.map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AnecdoteList