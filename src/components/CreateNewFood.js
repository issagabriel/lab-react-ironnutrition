import React from "react";

const CreateNewFood = (props) =>{
    const [name, setName] = React.useState('');
    const [calories, setCalories] = React.useState('');
    const [image, setImage] = React.useState('');
    const [quantity, setQuantity] = React.useState('');

    const newFoodToPushToMain = () =>{
        const newFood = {
            name: name,
            calories: calories,
            image: image,
            quantity: quantity,
        }
        props.addNewFood(newFood)
    }

    return(
        <div className='create-food'>
            <h3 className='new-title'>Add a New Food</h3>
            <label htmlFor='name'>Name</label>
            <input
                name='name'
                placeholder='name'
                value={name}
                type='text'
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='calories'>Calories</label>
            <input
                name='calories'
                placeholder='calories'
                value={calories}
                type='text'
                onChange={(e) => setCalories(e.target.value)}
            />
            <label htmlFor='image'>Image</label>
            <input
                name='image'
                placeholder='Image'
                value={image}
                type='text'
                onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor='quantity'>Quantity</label>
            <input
                name='quantity'
                placeholder='Quantity'
                value={quantity}
                type='text'
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button className='add-button' onClick={newFoodToPushToMain}>Add</button>
    </div>
    )
}


export default CreateNewFood