import React from 'react';
import  { useState } from 'react';
import './Review.css';
const Review = () => 
  {
   
  const [ratings, setRatings] = useState({});

  const handleStarClick = (cardIndex, starRating) => {
   
    const newRating = ratings[cardIndex] === starRating ? 0 : starRating;
    setRatings({ ...ratings, [cardIndex]: newRating });
  };
  const cards = [
    {
      img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Burrito",
      text: "Burrito, a tortilla wrapped around a mixed filling of such ingredients as meat, cheese, beans, and vegetables."
    },
    {
      img: "https://images.pexels.com/photos/5718073/pexels-photo-5718073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Chicken",
      text: "Chicken is high in health-promoting nutrients, including protein, several B vitamins, selenium, and choline."
    },
    {
      img: "https://images.pexels.com/photos/9393356/pexels-photo-9393356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cake",
      text: "Cakes are often made to celebrate special occasions like birthdays or weddings. There are many kinds of cakes."
    },
    {
      img: "https://images.pexels.com/photos/20593399/pexels-photo-20593399/free-photo-of-shrimps-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Prawn",
      text: "prawns includes all nine amino acids necessary for the body to maintain health and function."
    },
    {
      img: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Dosa",
      text: "Dosas are both light and nutritious, containing a good mix of carbs, fat, proteins, vitamins, sodium, and potassium."
    }, {
      img: "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Juice",
      text: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables."
    },

  ];
  
  return (
    <div className="review-container" id="review">
    <h2 className="review-heading">Customer Reviews</h2>
    {cards.map((card, index) => (
      <div className="card" key={index}>
        <img className="card-img-top" src={card.img} alt={card.title} />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= ratings[index] ? 'star selected' : 'star'} 
                onClick={() => handleStarClick(index, star)}
              >
                ⭐
              </span>
            ))}
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    ))}
  </div>
);
      
};

export default Review;
