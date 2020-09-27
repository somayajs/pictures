import React from 'react';

class ImageCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {spans: 0}
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", (e) => {
      // console.log(e.target.clientHeight);
      const imageHeight = (e.target.clientHeight);
      const spans = Math.ceil(imageHeight / 10 + 1);
      // console.log(Math.ceil(imageHeight / 10));
      // this.setState({spans: spans})
      this.setState({spans});
      console.log(this.state.spans)
    })
  }
  render() {
    const {urls, alt_description} = this.props.image
    return (
     <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    )
  }
}

export default ImageCard;
