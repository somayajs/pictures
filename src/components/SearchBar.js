import React from "react";

export default class SearchBar extends React.Component {
  state = { inputValue: "" }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.passValbackToAppOnSumbit(this.state.inputValue);
  }
  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={ this.onFormSubmit}>
          <label>Image Search</label>
          <input value={this.state.inputValue} type="text" onChange={e => this.setState({ inputValue: e.target.value})}/>
        </form>
      </div>
    );
  }
}
