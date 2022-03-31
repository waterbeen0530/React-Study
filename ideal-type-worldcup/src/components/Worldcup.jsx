import React from "react";

const image = importAll(require.context('../../public/img'))

function importAll(event){
  let img=[];

    event.keys().forEach((item, index)=>{
      console.log(item)
    img[index]=item
  })

  return img
}

function Worldcup () {
  const getRendomIndex = function() {
    const random = Math.floor(Math.random() * image.length);
    return image[random];
  }

  return (
    <>
    <h1>고양이 월드컵</h1>
    
        <img src={`img/${getRendomIndex()}`} alt="" />
        <img src={`img/${getRendomIndex()}`} alt="" />
    
    
    </>
  );
}

export default Worldcup;