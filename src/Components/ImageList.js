import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //   console.log(props.images);

  // returning list of images to the user using maps to render DOM elements
  //   const images = props.images.map((image) => {
  // adding the key for rendering, key is required (optional but recommended) when rendering list items of any type
  //     return (
  //       <img key={image.id} src={image.urls.regular} alt={image.description} />
  //     );
  //   });

  // alternative way of rendering without the repeated use of image variable name, directly tap the values from the response

  // destructuring of image object
  // const images = props.images.map(({ description, id, urls }) => {

  // passing prop to other component
  const images = props.images.map((image) => {
    // regular return to the list builder
    // return <img key={id} src={urls.regular} alt={description} />;
    // component based rendering
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
