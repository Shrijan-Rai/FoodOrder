import React from 'react';

function OrderSummary({ selectedMeals, selectedDrinks, totalPrice }) {
  return (
    <div className="OrderSummary">
      <h2>Order Summary</h2>
      <div>
        <h3>Selected Meals:</h3>
        <ul>
          {selectedMeals.map((meal) => (
            <li key={meal.id}>
              {meal.title} ({meal.price.toFixed(2)})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Selected Drinks:</h3>
        <ul>
          {selectedDrinks.map((drink) => (
            <li key={drink.id}>
              {drink.title} ({drink.price.toFixed(2)})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total Price:</h3>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default OrderSummary;
