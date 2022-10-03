import React from 'react'
import { useEffect, useState } from 'react'
// import axiosPrivate from '../api/axios'
import Book from '../Components/Book'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import Axios from 'axios'




// FOR SORTING
// return only which has "category1" sa value in category array
// if(d.category.includes("category1")){
//   return (
//     <Book 
//       key={d._id}
//       book={d}
//     />
//   )


const Books = ({ id }) => {
  
  const axiosPrivate = useAxiosPrivate();

  console.log("from books.js: " + id);
  const [listOfBooks, setListOfBooks] = useState([])

  // useEffect(async () => {
  //   // Axios.get("http://localhost:8080/books", {"user": "632b74f0840ccfab4f7c8ee5"}).then((res) => {
  //   //   setListOfBooks(res.data.data.allBooks);
  //   // });

  //   const getData = async () => {
  //     try {
  //       const response = await axiosPrivate.get(`/books`, {params: {id: id}});
  //       setListOfBooks(response.data.data.allBooks);
  //       console.log(listOfBooks)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData();

  // }, []);
  
  useEffect(async () => {
    // Axios.get("http://localhost:8080/books", {"user": "632b74f0840ccfab4f7c8ee5"}).then((res) => {
    //   setListOfBooks(res.data.data.allBooks);
    // });

    const getData = async () => {
      try {
        const response = await axiosPrivate.get(`/books`, { params: { id: id }});
        console.log("trying to get books...");
        setListOfBooks(response.data.data.allBooks);
        console.log(listOfBooks)
      } catch (err) {
        console.log(err)
      }
    }
    getData();

  }, []);
  
  // const deleteBook = (_id) => {
  //   Axios.delete(`http://localhost:8080/books/${_id}`)
  //   console.log('deleted ' + _id)
  // }


  return (
    <div className="books">

      {

        listOfBooks.map((book) => {
          return (
            <Book book={book} key={book._id} />
          )
        })
      }


    </div>
  )
}

export default Books
