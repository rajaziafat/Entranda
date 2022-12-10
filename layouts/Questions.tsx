import QuestionCard from "components/QuestionCard";
import React from "react";

function Questions() {
  return (
    <div>
      <div className="container">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-center font-bold text-2xl xl:text-[30px] mb-4">
            Still have a question?
          </h1>
          <p className="text-center -text-blue text-sm xl:text-lg  font-medium">
            The Brilliant reasons Entrada should be your one-stop-shop!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 relative">
          <img
            src="images/dots.png"
            className="absolute top-[-10%] md:top-[-14%] left-[4%] z-[-10] rotate-[90deg] w-[7%]"
            alt=""
          />
          <QuestionCard
            title="For Sales"
            subtitle="The Brilliant reasons Entrada be your one-stop-shop!"
            email="sales@embrada.com"
            phoneNumber="+91(123) 456-32-12"
            color="#00B1A7"
            icon="images/headphones.png"
          />
          <QuestionCard
            title="Help & Support"
            subtitle="The Brilliant reasons Entrada be your one-stop-shop!"
            email="help@embrada.com"
            phoneNumber="+91(123) 456-32-12"
            color="#1D293F"
            icon="images/help-circle.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Questions;
