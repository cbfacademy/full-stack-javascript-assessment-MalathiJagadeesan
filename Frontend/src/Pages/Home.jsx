import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner, { Spinners } from '../Components/Spinners';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import{MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import Bookscard from '../Components/Home/Bookscard';
import Bookstable from '../Components/Home/Bookstable';



const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [showType, setShowType] = useState('table');
    useEffect(() => {
        setLoading(true);
        axios
        .get('http://localhost:9012/books')
        .then((response) => {
            setBooks(response?.data?.date);
            setLoading(false);
                       
        }).catch((err) => { 
            console.log(error);
            setLoading(false);
        });
    },[]);
  console.log(books)
  return (
     <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinners />
      ) : showType === 'table' ? (
        <Bookstable books={books} />
      ) : (
        <Bookscard books={books} />
      )}
    </div>
  );
};

export default Home