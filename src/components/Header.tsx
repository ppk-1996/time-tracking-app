import { NavLink } from "react-router-dom";
import profile from "../assets/image-jeremy.png";

const Header = () => {
  return (
    <header className="bg-darkBlue rounded-xl md:col-span-4 mt-3 relative">
      <section className="bg-blue p-4 rounded-xl flex justify-center md:block ">
        <div>
          <img
            src={profile}
            className="object-cover w-16 border-white border-2 rounded-full ml-2"
          />
        </div>
        <h1 className="p-3  md:mt-5 ">
          <p className="text-xs text-gray">Report for</p>
          <p className="text-2xl font-light">
            Jeremy
            <br className="hidden md:block" />
            <span className="md:hidden inline-block">&nbsp;</span>
            Robson
          </p>
        </h1>
      </section>
      <nav className="flex text-desaturatedBlue py-4 justify-around md:block md:px-7">
        <NavLink
          to="/daily"
          activeClassName="text-white"
          className="w-1/3 text-center md:text-left md:block md:pt-2"
        >
          Daily
        </NavLink>
        <NavLink
          exact
          to="/weekly"
          activeClassName="text-white"
          className="w-1/3 text-center md:text-left md:block md:pt-2"
        >
          Weekly
        </NavLink>
        <NavLink
          exact
          to="/monthly"
          activeClassName="text-white"
          className="w-1/3 text-center md:text-left md:block md:pt-2"
        >
          Monthly
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
