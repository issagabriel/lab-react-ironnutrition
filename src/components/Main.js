import React from "react";
import FoodBox from './FoodBox'
import foods from '../foods.json';
import CreateNewFood from "./CreateNewFood";

const Main= () =>{
    const [foodArr, setFoodArr]= React.useState(foods)
    const [searchbarText, setSearchbarText] = React.useState('');
    const [fullFoodArr, setFullFoodArr] = React.useState(foods);


    React.useEffect(() => {
        let sanitizedText = searchbarText.toLowerCase();
        let newArr = [...fullFoodArr];
        newArr = newArr.filter((food) => {
          return food.name.toLowerCase().includes(sanitizedText);
        });
        setFoodArr(newArr);
      }, [searchbarText]);
    
      const resetFood = () => {
        setFoodArr(fullFoodArr);
      };

    const searchForFood = () => {
        let sanitizedText = searchbarText.toLowerCase();
        let newArr = [...foodArr];
        newArr = newArr.filter((food) => {
          return food.name.toLowerCase().includes(sanitizedText);
        });
        setFoodArr(newArr);
      };
    
    const searchWhileTyping = (val) => {
        setSearchbarText(val);
      };
    
    
    const addNewFood = (newFood) =>{
        let newArr = [...foodArr];
        newArr= newArr.concat(newFood);
        setFoodArr(newArr);
    }
    console.log(foodArr)
    
    
    return(
        <div>
            <h1>Iron Nutrition Lab</h1>
            <div className='search-bar'>
                <p>Search</p>
                <input
                name='search'
                placeholder='Search Food'
                value={searchbarText}
                onChange={(e) => searchWhileTyping(e.target.value)}
                />
                <button onClick={searchForFood}>Go</button>
                <button onClick={resetFood}>Reset</button>
                
                
            </div>
            <CreateNewFood addNewFood={addNewFood}/>
            {foodArr.map((food)=>{
                return(
                    <FoodBox name={food.name}
                    calories={food.calories}
                    image={food.image}
                    quantity={food.quantity} />
                )
            })}
            
            
        </div>
    )
}


export default Main