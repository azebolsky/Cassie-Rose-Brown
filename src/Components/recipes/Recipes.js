import React from "react";
import "./Recipes.css";

const recipeItems = [
  {
    title: "Spinach Linguine With Edamame Pesto",
    url:
      "https://www.theppk.com/2009/10/edamame-pesto-a-totally-satisfying-low-fat-manifesto/",
    image: "https://i.imgur.com/87OCdR3.jpg",
  },
  {
    title: "Dilly Stew With Rosemary Dumplings",
    url: "https://www.theppk.com/2011/11/dilly-stew-with-rosemary-dumplings/",
    image: "https://i.imgur.com/PWl79TC.jpg",
  },
  {
    title: "5-Spice Vegan Tacos",
    url: "https://www.theppk.com/2020/05/bbq-5-spice-tempeh-mushroom-tacos/",
    image: "https://i.imgur.com/tXr18WL.jpg",
  },
  {
    title: "Buffalo Cauliflower",
    url: "https://tasty.co/recipe/buffalo-cauliflower",
    image: "https://i.imgur.com/4L0ongD.jpg",
  },
  {
    title: "Singapore Noodle",
    url:
      "https://www.reddit.com/r/China/comments/899r56/recipe_singapore_fried_rice_noodles_a_hong_kong/",
    image: "https://i.imgur.com/FBApq79.jpg",
  },
  {
    title: "Vegan Tempeh Reuben",
    url: "https://www.theppk.com/2020/05/bbq-5-spice-tempeh-mushroom-tacos/",
    image: "https://i.imgur.com/tXr18WL.jpg",
  },
];

const recipes = () => {
  return (
    <section id="recipes">
      <h1>My Recipes</h1>
      <div className="underline"></div>
      <div className="inspirations">
        <div className="inspirations-text">
          So much of my inspiration comes from vegan restaurant owner and
          author, Isa Chandra. A large chunk of the recipes below are hers
          because of how uniquely delicious they are.
        </div>
        <div className="cookbooks">
          <img
            src="https://i.imgur.com/DZNBAaR.jpg"
            alt="I Can Cook Vegan Cookbook"
            className="cookbook1"
          />
          <img
            src="https://i.imgur.com/aj4E8DY.jpg"
            alt="Isa Does It Cookbook"
            className="cookbook2"
          />
        </div>
      </div>
      <div className="container">
        {recipeItems.map((item, idx) => {
          return (
            <div key={idx} className="card">
              <a href={item.url} className="link">
                {item.title}
              </a>
              <img
                src={item.image}
                alt={item.title}
                width="100%"
                height="100%"
                className="food-image"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default recipes;
