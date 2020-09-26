import React from "react";

const ImageList = (props) =>{
  console.log(props.images)
  const imageElements = props.images.map(image=> <img src={image.urls.regular} alt={image.alt_description} key={image.id}/>);

  return (
  <div>{imageElements}</div>
  // <div></div>
  );
}

export default ImageList;
