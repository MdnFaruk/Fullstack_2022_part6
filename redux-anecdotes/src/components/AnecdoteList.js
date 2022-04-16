import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(
        ({anecdotes,filterAncedotes}) => 
        filterAncedotes ? 
        anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterAncedotes.toLowerCase()))
        :
        [...anecdotes].sort((first, second) => second.votes - first.votes) 
    )
    
    const dispatch = useDispatch()

    const vote = (id) => {
        const anecdote = anecdotes.find(anecdote => anecdote.id === id).content
        dispatch(addVote(id))
        dispatch(setNotification(`you voted '${anecdote}'`))
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