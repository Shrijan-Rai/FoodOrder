import React, { useState } from 'react';
import './App.css';

// Import components
import MealList from './components/MealList';
import TagList from './components/TagList';
import PersonList from './components/PersonList';
import OrderSummary from './components/OrderSummary';

// Import the dataset
import data from './data/dataset.json';

function App() {
  // State to manage selected meals, drinks, tags, and people
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);

  // Function to handle meal selection
  const handleMealSelect = (meal) => {
    // Add the selected meal to the list of selected meals
    setSelectedMeals([...selectedMeals, meal]);
  };

  // Function to handle drink selection
  const handleDrinkSelect = (drink) => {
    // Add the selected drink to the list of selected drinks
    setSelectedDrinks([...selectedDrinks, drink]);
  };

  // Function to handle tag selection
  const handleTagSelect = (tagId) => {
    // Add or remove the selected tag from the list of selected tags
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  // Function to handle person selection
  const handlePersonSelect = (personId) => {
    // Add or remove the selected person from the list of selected people
    if (selectedPeople.includes(personId)) {
      setSelectedPeople(selectedPeople.filter((person) => person !== personId));
    } else {
      setSelectedPeople([...selectedPeople, personId]);
    }
  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    const mealPrices = selectedMeals.map((meal) => meal.price);
    const drinkPrices = selectedDrinks.map((drink) => drink.price);
    const totalMealPrice = mealPrices.reduce((acc, price) => acc + price, 0);
    const totalDrinkPrice = drinkPrices.reduce((acc, price) => acc + price, 0);
    return totalMealPrice + totalDrinkPrice;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plane Food Ordering App</h1>
      </header>
      <div className="App-content">
        <div className="App-left">
          {/* TagList */}
          <TagList
            tags={data.labels}
            selectedTags={selectedTags}
            onSelectTag={handleTagSelect}
          />
        </div>
        <div className="App-main">
          {/* MealList */}
          <MealList
            meals={data.meals}
            onMealSelect={handleMealSelect}
            onDrinkSelect={handleDrinkSelect}
          />
        </div>
        <div className="App-right">
          {/* PersonList */}
          <PersonList
            people={data.people}
            selectedMeals={selectedMeals}
            onPersonSelect={handlePersonSelect}
          />
          {/* OrderSummary */}
          <OrderSummary
            selectedMeals={selectedMeals}
            selectedDrinks={selectedDrinks}
            totalPrice={calculateTotalPrice()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
