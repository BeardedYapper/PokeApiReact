import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type } = pokemon;
  console.log(sprite)
  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h3 className='data-name'>ID: {id}</h3>
        <h4 className='data-name'> {name}</h4>
        <p className="data-char">Type: {type}</p>
      </div>
    </section>
  )
}

export default DetailView;