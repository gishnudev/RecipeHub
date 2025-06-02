import React, { useEffect, useState } from 'react'

const Menus = () => {
    const[ menu,setMenu] = useState([])
    useEffect(()=>{
        const fetch_Data = async()=>{
            try {
                const API_URL='https://www.themealdb.com/api/json/v1/1/search.php?f=a'
                let res = await fetch(API_URL)
                let data = await res.json()
                setMenu(data.meals)
                // console.log(data);
            } catch (error) {
                console.log("error in fetching data",error);
                
            }
        }
        fetch_Data();
    },[])
    console.log("the menus are",menu);
    const menu_images = menu.map((item)=>{
        console.log(item.strMealThumb);
        return(
            <div>
                <img src={item.strMealThumb} alt="" srcset="" />
                <h2>{item.strCategory}</h2>
            </div>       
        )
    })
    
  return (
    <div>
        {menu_images}
    </div>
    
  )
}

export default Menus