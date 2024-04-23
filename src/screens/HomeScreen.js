import { useEffect, useState } from 'react';
import './HomeScreen.css'
import GroceryCard from '../components/GroceryCard';
import Toast from '../components/Toast';

function HomeScreen(){

    const [itemsToBuy, setItemsToBuy] = useState(()=>{
        const savedData = localStorage.getItem("itemData");
        const parsedData = JSON.parse(savedData);
        return parsedData || [] 
    });
    const [inputNewItem, setInputNewItem] = useState("");
    const [openItemAddedToast, setOpenItemAddedToast] = useState(false);
    const [openItemDeletedToast, setOpenItemDeletedToast] = useState(false);

    useEffect(()=>{

        localStorage.setItem("itemData",JSON.stringify(itemsToBuy));

    },[itemsToBuy])

    function inputHandler(e){

        setInputNewItem(e.target.value);

    }

    function clickHandler(){

        const newItem = {
            name : inputNewItem,
            purchased : false
        }

        setItemsToBuy((prevState) => {
            return [...prevState, newItem]
        });

        setInputNewItem("");

        setOpenItemAddedToast(true)

    }

    return(

        <div id='container'>
            <h1 id='heading'>Grocery Bud</h1>
            <div id='input-field'>
                <input type='text' value={inputNewItem} onChange={inputHandler} placeholder='Add item' />
                <button onClick={clickHandler}>Add Item</button>
                <Toast open = {openItemAddedToast} setOpen={setOpenItemAddedToast} message = {"Item added to list"}/>
                <Toast setOpen = {setOpenItemDeletedToast} open={openItemDeletedToast} message = {"Item deleted"} />
            </div>
            <div id='item-card-container'>
                {
                    itemsToBuy.map((elem,index) => {

                        return <GroceryCard isPurchased = {elem.purchased} key={index} id = {index} itemName = {elem.name} setItemsToBuy = {setItemsToBuy} setOpen = {setOpenItemDeletedToast} open={openItemDeletedToast} />

                    })
                }
            </div>
        </div>

    )
}

export default HomeScreen;