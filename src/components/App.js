import React from "react";
import unsplaash from "../api/unsplaash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
export default class App extends React.Component {
  state = {
    images: [],
    searchWord: ''
  }
  getValue = async (searchBarInputVal) =>{
    this.setState({searchWord: searchBarInputVal})
     try {
      const response = await unsplaash.get("/search/photos", {
        params : {
          query: searchBarInputVal
        }
      });
      // console.log(this)
      this.setState({images: response.data.results})

    } catch(e) {console.log(e)};
  }

  render() {
    return (
      <div className="App">
        <SearchBar passValbackToAppOnSumbit={this.getValue}/>
        <ImageList images= {this.state.images} searchWord = {this.state.searchWord} />
      </div>
    );
  }
}

