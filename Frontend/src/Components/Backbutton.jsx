import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Backbutton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link to="/" className="bg-sky-800 text-white px-4 py-1 rounded-lg wfit">
        {" "}
        <BsArrowLeft title="Back" className="text 2xl "></BsArrowLeft>{" "}
      </Link>
    </div>
  );
};

export default Backbutton;
