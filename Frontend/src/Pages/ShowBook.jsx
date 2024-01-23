import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Backbutton from '../Components/Backbutton';
import Spinner from '../Components/Spinners';


const ShowBook = () => {
    const [book, setbook ] = useState({});
    console.log(book)
    const [loading, setLoading ] = useState(false);
    const {id} = useParams();

 useEffect (() => {
setLoading(true);
axios
.get(`http://localhost:9012/books/${id}`)
.then ((response) => {
    setbook(response?.data[0]);
    setLoading(false);
    
})
.catch((error)=> {console.log(error);

});

 },[])

  return (
    <><div className='p-4'>
          <Backbutton></Backbutton> <div className='flex flex-col border-2 border sky-400 rounded-xl wfit p-4'>
          {loading ? (
              <Spinner></Spinner>
          ) : (
              <><><><><div className='my-4'>
                  <span className='text-xl mr-4 text-gray-500'>Id :</span>
                  <span> {book?._id}</span>
              </div>
                  <div className='my-4'>
                      <span className='text-xl mr-4 text-gray-500'>Title :</span>
                      <span> {book?.title}</span>
                  </div></>
                  <div className='my-4'>
                      <span className='text-xl mr-4 text-gray-500'>Author :</span>
                      <span> {book?.author}</span>
                  </div></>
                  <div className='my-4'>
                      <span className='text-xl mr-4 text-gray-500'>PublishYear :</span>
                      <span> {book?.publishYear}</span>
                  </div></>
                  <div className='my-4'>
                      <span className='text-xl mr-4 text-gray-500'>Create Time :</span>
                      <span> {new Date (book?.createdAt).toString()}</span>
                  </div></>)}
                  <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Last update time :</span>
              <span> {new Date (book?.updatedAt).toString()}</span>

              </div>
          </div>

    </div></>
  )
}

export default ShowBook