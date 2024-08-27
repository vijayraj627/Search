import { useEffect, useState } from "react";
import { fruitsList } from "./fruits";

function App() {

  const [fruits,setFruits] = useState(fruitsList);
  const [searchItem, setSearchItem] = useState("")

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  }

  const handleClick = (fruit) => {
    setSearchItem(fruit)
  }

  useEffect(()=>{
      const debounce = setTimeout(() => {
        filterData(searchItem)
      }, 1000);

      return () => {
        clearTimeout(debounce);
      }
  },[searchItem])

  const filterData = (searchValue) => {
    const filter = fruitsList.filter((fruit)=>
    (
      fruit.toLowerCase().includes(searchItem.toLowerCase())
    )
    )
    setFruits(filter)
  }
  

  return (
    <div className="App">
        <input type="" placeholder="Enter fruit name" value={searchItem} onChange={handleChange}/>
        {searchItem.length>0 && fruits.map((fruit,index)=>{
          return <p className="fruitsList" key={index}
          onClick={()=>handleClick(fruit)}
          >{fruit}</p>
        })}
    </div>
  );
}

export default App;
