import React from 'react';

function PersonList({ people, selectedMeals, onMealDeselect }) {
  return (
    <div className="PersonList">
      <h2>Select Meals for People</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <h3>{person.name}</h3>
            <ul>
              {selectedMeals
                .filter((meal) => meal.personId === person.id)
                .map((meal) => (
                  <li key={meal.id}>
                    {meal.title} ({meal.price.toFixed(2)})
                    <button onClick={() => onMealDeselect(meal)}>Deselect</button>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
