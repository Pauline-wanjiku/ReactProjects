import React, { useState, useEffect } from "react";
import "./style.css";

//To do
//display the data
//*fetch and display =>useEffect\/
//button
//read more
//remove
//short circuit evaluation
//refresh brn after no display

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tour, setTour] = useState([]);
  const [isInfo, setInfo] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  //fetch data
  const fetchDataTour = async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const dataFetched = await response.json();
      setTour(dataFetched);
      setisLoading(false)
    }
    else {
      setisLoading(isLoading)
    }
  };
  //useEffect for fetching data
  useEffect(() => {
    fetchDataTour();
  }, []);
  if (isLoading) {
    return <h4>Loading...</h4>
    
  }
  
  const deleteItem = (id) => {
    const newList = tour.filter((eachId) => eachId != id)
    setTour(newList)

    
  }
  return (
    <>
      <h1>Tours</h1>
      <h4>Available Tours: {tour.length}</h4>
      <ul>
        {tour.map((tours) => {
          const { id, name, info, image, price } = tours;
          return (
            <>
              <section key={id}>
                <li >
                  <img src={image} alt={name} />

                  <h3 className="tour-title">{name}</h3>
                  <h4 className="tour-price">{price}</h4>
                  <button className="single-tour" onClick={() => setInfo(!isInfo)}>
                    More information
                  </button>
                  {isInfo && info}
                  <button className="delete-btn" onClick={()=>deleteItem(id)}>Remove From List</button>
                </li>
              </section>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
