import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  {
    title: "5-Spice Vegan Tacos",
    url: "https://www.theppk.com/2020/05/bbq-5-spice-tempeh-mushroom-tacos/",
    image: "https://i.imgur.com/tXr18WL.jpg",
  },
  {
    title: "5-Spice Vegan Tacos",
    url: "https://www.theppk.com/2020/05/bbq-5-spice-tempeh-mushroom-tacos/",
    image: "https://i.imgur.com/tXr18WL.jpg",
  },
  {
    title: "5-Spice Vegan Tacos",
    url: "https://www.theppk.com/2020/05/bbq-5-spice-tempeh-mushroom-tacos/",
    image: "https://i.imgur.com/tXr18WL.jpg",
  },
];

const recipes = () => {
  return (
    <section id="recipes">
      <h1>My Recipes</h1>
      <div className="container">
        {recipeItems.map((item, idx) => {
          return (
            <div key={idx} className="card">
              <h1 className="title">{item.title}</h1>
              <img
                src={item.image}
                alt={item.title}
                width="100%"
                height="100%"
              />
              <a href={item.url} className="link">
                Link
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default recipes;
