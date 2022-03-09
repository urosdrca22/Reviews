import React, { Fragment } from 'react';
import Review from './Components/Review';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Fragment>
      <div className="title-div">
        <h1>Our Reviews</h1>
      </div>
      <div className="underline"></div>
        <section className="reviews-container">
            <Review />
        </section>
    </Fragment>
  );
}

export default App;
