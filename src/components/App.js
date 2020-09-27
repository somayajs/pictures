import React from "react";
import unsplash from "../api/unsplash";
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
      const response = await unsplash.get("/search/photos", {
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
        <ImageList images= {this.state.images}/>
      </div>
    );
  }
}

