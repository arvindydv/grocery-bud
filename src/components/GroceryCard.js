import { useState } from 'react';
import './GroceryCard.css'
import Toast from '../components/Toast';

function GroceryCard({isPurchased , id , itemName , setItemsToBuy, setOpen, open }){



    function checkBoxHandler(){
        setItemsToBuy((prevState) => {
            const data = [...prevState];
            data[id].purchased = !isPurchased ;
            return data;
        })
    }

    function deleteHandler(){
        setItemsToBuy((prevState) => {
            const data = [...prevState];
            data.splice(id,1);

            return data;
        })

        setOpen(true)
    }

    return(
        <div className='item-card'>
            <div >
                <input type='checkBox' checked = {isPurchased} onChange={checkBoxHandler}/>
                <p style={{
                    textDecoration : isPurchased ? "line-through" : "none"
                }}>{itemName.toUpperCase()}</p>
            </div>
            <button onClick={deleteHandler} className='delete-btn' >Delete</button>
            
        </div>
    )
}

export default GroceryCard;