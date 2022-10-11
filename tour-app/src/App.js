import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Tours from "./tours";
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
  const [isLoading, setisLoading] = useState(true);

  const removeItem = (id) => {
    const newTour = tour.filter((tour)=>tour.id !== id)
    setTour(newTour)
    
    
  }
  //fetch data
  const fetchDataTour = async () => {
    try {
      const response = await fetch(url);
      const dataFetched = await response.json();
      setTour(dataFetched);
      setisLoading(false);
      
    } catch (error) {
      setisLoading(false)
      console.log(error)
      
    }
  };
  //useEffect for fetching data
  useEffect(() => {
    fetchDataTour();
  }, []);


  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tour.length === 0) {
    return (
      <main>
        <div className="title">
          <h4>Available Tours: {tour.length}</h4>
          <button className="btn" onClick={() => fetchDataTour()}>
            Refresh
          </button>
        </div>
      </main>
    );

  }
    return (
      <main>
        <Tours tours={tour} removeTour={removeItem} />
      </main>
    );


 
}

export default App;
