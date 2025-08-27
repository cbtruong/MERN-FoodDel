import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const StoreContext = createContext(null);

export const StoreContextProvider =(props)=>{

    const [cartItems,setCartItems]=useState({});
    const navigate = useNavigate();
    const url ="http://localhost:4000";
    const [token,setToken]=useState("");
    const [food_list,setFood_list]=useState([])


    const addToCart=(itemId)=>{
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFormCart=(itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item );
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    useEffect(()=>{
        
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token"))
            setToken(localStorage.getItem("token"));
        }

        loadData();
    },[])


    const fetchFoodList =async()=>{
        const response = await axios.get(url+"/api/food/list");
        setFood_list(response.data.data);
    }
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFormCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        navigate,
        setFood_list
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}