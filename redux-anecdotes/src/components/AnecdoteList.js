import { useSelector, useDispatch } from 'react-redux'
import { addVoteToAnecdote } from '../reducers/anecdoteReducer'
import { notificationHandler } from '../reducers/notificationReducer'


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
        dispatch(addVoteToAnecdote(id, {...anecdote, votes: anecdote.votes + 1 }))
        dispatch(notificationHandler(`you voted '${anecdote.content}'`, 10))
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