import React, { useState, useEffect } from "react";
import Backbutton from "../Components/Backbutton";
import Spinners from "../Components/Spinners";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

const EditBook = (props) => {
  const [title, setTitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${props.apiurl}/books/${id}`)
      .then((response) => {
        console.log(response);
        setauthor(response?.data[0]?.author);
        setpublishYear(response?.data[0]?.publishYear);
        setTitle(response?.data[0]?.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check the console");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:9012/books/${id}`, data)
      .then(() => {
        setLoading(false);
        message.success("Book Edited successfully");
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
      <Backbutton></Backbutton>
      <h1 className="text-3xl my-4"> Edit Book</h1>
      {loading ? <Spinners /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl-w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setpublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <div className="my-4">
            <button className="p2 bg-sky-300 m-8" onClick={handleEditBook}>
              {" "}
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
