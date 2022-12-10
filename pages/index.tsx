import BestSeller from "layouts/BestSeller";
import BookNow from "layouts/BookNow";
import Category from "layouts/Category";
import Destinations from "layouts/Destinations";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import Partners from "layouts/Partners";
import Questions from "layouts/Questions";
import Subscribe from "layouts/Subscribe";
import TourGuide from "layouts/TourGuide";
import Trending from "layouts/Trending";
import React from "react";

function Index() {
  return (
    <div>
      <Navbar />
      <div className="mb-150px">
        <Hero />
      </div>
      <div className="mb-100px">
        <Category />
      </div>
      <div className="mb-100px">
        <Trending />
      </div>
      <div className="mb-100px">
        <Destinations />
      </div>
      <div className="mb-100px">
        <BestSeller />
      </div>
      <div className="mb-150px">
        <TourGuide />
      </div>
      <div className="mb-150px">
        <BookNow />
      </div>
      <div className="mb-150px">
        <Subscribe />
      </div>
      <div className="mb-16 md:mb-150px">
        <Partners />
      </div>
      <div className="mb-150px">
        <Questions />
      </div>
      <div className="mb-8">
        <Footer />
      </div>
    </div>
  );
}

export default Index;
