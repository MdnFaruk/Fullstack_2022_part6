import { connect } from 'react-redux'
import { filterSearch } from '../reducers/filterReducer'

const Filter = (props) => {

    const handleChange = (event) => {
        event.preventDefault()
        props.filterSearch(event.target.value)
    }
    const style = {
      marginBottom: 10,
      marginTop: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }

  const mapDispatchToProps = {
    filterSearch,
  }
  
  export default connect( null, mapDispatchToProps)(Filter)