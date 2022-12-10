import Place from "layouts/Activity/Place";
import Navigator from "components/Navigator";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Partners from "layouts/Partners";
import Questions from "layouts/Questions";
import PlaceDetails from "layouts/Activity/PlaceDetails";

function Activity() {
  return (
    <div>
      <div className="mb-10">
        <Navbar wrapperClassName="shadow-[0_0_10px_rgba(0,0,0,.3)]" />
      </div>
      <div className="mb-8">
        <Navigator title="Home / Things to do in Tirana / Things to do in Petrela" />
      </div>
      <div className="mb-7">
        <div className="container">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold -text-blue-300 text-center sm:text-left">
            A secret river adventures tour. Explore the nature wonders of the
            Riviera Maya
          </h1>
        </div>
      </div>
      <div className="mb-16">
        <Place />
      </div>
      <div className="mb-100px lg:mb-200px">
        <PlaceDetails />
      </div>
      <div className="mb-16 md:mb-150px ">
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

export default Activity;
