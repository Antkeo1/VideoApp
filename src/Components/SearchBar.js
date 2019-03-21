import React from 'react'

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  // onChange event
  termChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  // onSubmit event
  formSubmit = e => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className='searchbar ui segment'>
        <form onSubmit={this.formSubmit} className='ui form' >
          <div className='field'>
            <label>Video Search</label>
            <input type='text'
                    value={this.state.term}
                    onChange={this.termChange}
                  />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
