import React, { useState } from "react";
import Backbutton from "../Components/Backbutton";
import Spinners from "../Components/Spinners";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

const DeleteBook = (props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`${props.apiurl}/books/${id}`)
      .then(() => {
        setLoading(false);
        message.success("Book Deleted successfully");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        message.error("Something went wrong");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4"> Delete Book</h1>
      {loading ? <Spinners /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded -xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl"> Are you sure you want to delete? </h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
