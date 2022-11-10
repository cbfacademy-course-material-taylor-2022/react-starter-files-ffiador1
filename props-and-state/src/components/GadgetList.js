import React from 'react';

const GadgetList = (props) => {
  const titleStyle = {"fontWeight":"bold", "colour":"blue"}

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
      <div>
        <p style={titleStyle}>{item.title} </p>
        <p>{item.price}</p>
        <img src={item.src} alt=''/>.
      </div>))}
    </main>
  );
}

export default GadgetList;
