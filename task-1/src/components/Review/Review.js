import React from 'react';
import  { useState } from 'react';
import './Review.css';
const Review = () => {
   return (
    <div className="review-container" id="review">
     <h2 className="review-heading" >Customer Reviews</h2>
     <div className="card">
    <img className="card-img-top" src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="burrito" />
    <div className="card-body">
      <h5 className="card-title">Burrito</h5>
      <p className="card-text">Burrito, a tortilla wrapped around a mixed filling of such ingredients as meat, cheese, beans, and vegetables.</p>
      <div className="rating">
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <button className="btn btn-primary">Add to Cart</button>
      <button className="btn btn-success">Buy Now</button>
    </div>
  </div>
  <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/5718073/pexels-photo-5718073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="chicken" />
        <div className="card-body">
          <h5 className="card-title">Chicken</h5>
          <p className="card-text">Chicken is high in health-promoting nutrients, including protein, several B vitamins, selenium, and choline.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/9393356/pexels-photo-9393356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cake" />
        <div className="card-body">
          <h5 className="card-title">Cake</h5>
          <p className="card-text">Cakes are often made to celebrate special occasions like birthdays or weddings. There are many kinds of cakes.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/20593399/pexels-photo-20593399/free-photo-of-shrimps-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="prawn" />
        <div className="card-body">
          <h5 className="card-title">Prawn</h5>
          <p className="card-text">prawns includes all nine amino acids necessary for the body to maintain health and function.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dosa" />
        <div className="card-body">
          <h5 className="card-title">Dosa</h5>
          <p className="card-text">Dosas are both light and nutritious, containing a good mix of carbs, fat, proteins, vitamins, sodium, and potassium.</p>
          <div className="rating">
            <span>⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="juice" />
        <div className="card-body">
          <h5 className="card-title">Juice</h5>
          <p className="card-text">Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
  </div>
);
      
};

export default Review;
