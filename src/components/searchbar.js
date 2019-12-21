import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  inputChanged = e => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmitted = e => {
    e.preventDefault();

    // TODO: callback from app component
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmitted}>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.inputChanged}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
