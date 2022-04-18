import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationHandler } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(anecdote)
        props.notificationHandler("New anecdote added", 5)
    }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote' /></div>
                <button type="submit">create</button>
            </form>
        </>
    )
}

const mapDispatchToProps = {
    createAnecdote,
    notificationHandler
  }

export default connect( null, mapDispatchToProps)(AnecdoteForm)