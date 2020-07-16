import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Recipes.css";

const recipeItems = [
  {
    title: "5-Spice Vegan Tacos",
    url: "https://www.theppk.com/2020/05/bbq-5-spice-tempeh-mushroom-tacos/",
    image: "https://i.imgur.com/tXr18WL.jpg",
  },
  {
    title: "5-Spice Vegan Tacos",
    url: "https://www.theppk.com/2020/05/bbq-5-spice-tempeh-mushroom-tacos/",
    image: "https://i.imgur.com/LnmLlbT.jpg",
  },
  {
    title: "5-Spice Vegan Tacos",
    url: "https://www.theppk.com/2020/05/bbq-5-spice-tempeh-mushroom-tacos/",
    image: "https://i.imgur.com/tXr18WL.jpg",
  },
];

const recipes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };
  return (
    <section style={{ padding: "24px" }}>
      <h1>Recipes</h1>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </section>
  );
};

export default recipes;
