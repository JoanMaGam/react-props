import React from 'react';
import BookList from './components/Book';

function App() {

  const books = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg'
    },
    {
      id: 2,
      title: 'Supercommunicators',
      author: 'Charles Duhigg',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81G2riKjx4L._AC_UL600_SR600,400_.jpg'
    },
    {
      id: 3,
      title: 'Psychology of Money',
      author: 'Morgan Housel',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71TRUbzcvaL._AC_UL600_SR600,400_.jpg'
    },
    {
      id: 4,
      title: 'Attack from Within',
      author: 'Barbara McQuade',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81mHbtTh8dL._AC_UL600_SR600,400_.jpg'
    },
    {
      id: 5,
      title: "Don't Believe Everything You Think",
      author: 'Joseph Nguyen',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51xKFo2B+RL._AC_UL600_SR600,400_.jpg'
    },
    {
      id: 6,
      title: "How to Win Friends & Influence People",
      author: 'Dale Carnegie',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71vK0WVQ4rL._AC_UL600_SR600,400_.jpg'
    }
  ]



  return (
    <>
      <h1>Best Sellers Books</h1>
      <BookList books={books} />
    </>
  );
}

export default App;
