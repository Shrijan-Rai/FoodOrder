import React from 'react';

// function MealItem({ meals, onSelect }) {
//   return (
//     <div className="MealItem">
//       <img src={meals.img} alt={meals.title} />
//       <h3>{meals.title}</h3>
//       <p>Price: ${meals.price.toFixed(2)}</p>
//       <p>Starter: {meals.starter}</p>
//       <p>Desert: {meals.desert}</p>
//       <button onClick={() => onSelect(meals)}>Select Meal</button>
//     </div>
//   );
// }

// export default MealItem;
function MealItem({ meal, onMealSelect, onDrinkSelect }) {
  // Check if meal.price is defined and is a number
  const formattedPrice = meal.price && !isNaN(meal.price) ? meal.price.toFixed(2) : '';

  return (
    <div className="meal-item">
      <img src={meal.img} alt={meal.title} />
      <h3>{meal.title}</h3>
      <p>Price: ${formattedPrice}</p>
      {/* ... rest of your component */}
    </div>
  );
}

export default MealItem;






