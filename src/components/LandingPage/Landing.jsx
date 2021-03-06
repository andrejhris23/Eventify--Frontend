import react from "react";
import landingimage from "../../images/landingbackground.jpeg";
import LoginButton from "../Login/Login-button";

const Landing = () => {
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
      <img src={landingimage} class="absolute h-full w-full object-cover" />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <header class="absolute top-0 left-0 right-0 z-20"></header>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          <span class="font-bold uppercase text-yellow-400">EVENTIFY</span>
          <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
            Let yourself be carried
            <br />
            by events
          </h1>
          <LoginButton></LoginButton>
        </div>
      </div>
    </div>
  );
};

export default Landing;
