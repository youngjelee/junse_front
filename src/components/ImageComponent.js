import React from 'react';
import styled from "styled-components";


const StyledImage = styled.img`
display: block;
max-height: 224px;
margin: 0 auto;
src : ${(props)=>props.src || ''}
width : ${(props) =>props.width || '300px'}
height : ${(props) =>props.height || '300px'}}
`

const ImageComponent = ({ src, width, height }) => {
  return (
    // <div>
    //     <img src={src} alt="Image" width={width} height={height} />
    // </div>
        <StyledImage src={src} width ={width} height={height} />
  
    );
};

export default ImageComponent;
