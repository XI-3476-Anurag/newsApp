import React, { useState } from 'react'
import Home from '../home/Home';
import "./Navbar.scss"

function Navbar() {
    const [newsData, setNewsData] = useState(null);
    
    async function getNews(category_name){
        const response = await fetch(`https://inshorts.deta.dev/news?category=${category_name}`);
        const jsonData = await response.json();
        // console.log("hey", jsonData.data); 
        setNewsData(jsonData.data);
    }

    const [categoryName, setCategoryName] = useState('');
    function handleSelectOptions(e){
        e.preventDefault();
        setCategoryName(e.target.value);
        getNews(categoryName);
    }
 
  return (
  <>
        <div className='Navbar'>
            <div className="container">
                <div className="main-categories">
                    <div className="technology nav-btn" onClick={()=>{setCategoryName("technology")}}>Tech</div>
                    <div className="startup nav-btn" onClick={()=>{setCategoryName("startup")}}>StartUps</div>
                    <div className="entertainment nav-btn" onClick={()=>{setCategoryName("entertainment")}}>Entertainment</div>
                </div>
                <div className="options">
                    <select name="more-cat" id="cat" onChange={handleSelectOptions}>
                        <option value="">--More Categories--</option>
                        <option value="all" className='option'>All</option>
                        <option value="national" className='option'>National</option>
                        <option value="business" className='option'>Business</option>
                        <option value="sports" className='option'>Sports</option>
                        <option value="world" className='option'>World</option>
                        <option value="entertainment" className='option'>Entertainment</option>
                        <option value="miscellaneous" className='option'>Miscellaneous</option>
                        <option value="hatke" className='option'>Hatke</option>
                        <option value="science" className='option'>Science</option>
                        <option value="automobile" className='option'>Automobile</option>
                    </select>
                </div>
            </div>
        </div> 
        <div className="HomeStyle">
            <Home getNewsArr={newsData}/>
        </div>
</>
  )
}

export default Navbar
