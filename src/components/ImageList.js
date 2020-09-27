import ImageCard from './ImageCard';
import  "./ImageList.css"
import React from "react";

const ImageList = (props) =>{
  // console.log(props.images)
  const imageElements = props.images.map(image=> <ImageCard image={image} key ={image.id}/>);

  return (
  <div className="image-list">{imageElements}</div>
  );
}

export default ImageList;
