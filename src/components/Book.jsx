import React from 'react'

const BookList = ({ books }) => {

    return (
        <div className="container">
            {books &&
                books.map((book, index) => {
                    return (
                        <section key={index} className='book'>
                            <h4>{book.title}</h4>
                            <h5>{book.author}</h5>
                            <img src={book.img} />
                            <button onClick={() => alert(book.title)}>Click me</button>
                        </section>
                    );
                })};
        </div>
    );
};

export default BookList;