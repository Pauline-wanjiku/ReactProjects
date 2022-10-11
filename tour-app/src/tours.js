import React from 'react'
import Tour from './tour';

function Tours({ tours, removeTour }) {
    return (
      <>
        <section>
          <div className="title">
            <h1>Tours</h1>
            <div className="underline"></div>
                    <h4>Available Tours: {tours.length}</h4>
                    
          </div>
        </section>
        {tours.map((tour) => {
          return (
            <>
              <Tour key={tour.id} {...tour} removeTour ={removeTour} />
            </>
          );
        })}
      </>
    );

}
export default Tours