import React from 'react';
import {Link} from "react-router-dom";

const Book = ({book}) => {
    console.log(book)
    const { image, title, price, subtitle, isbn13 } = book;
    return (
        <Link to={`/book/${isbn13}`}>
            <div className="overflow-hidden transition duration-300 transform rounded  bg-white shadow-lg relative hover:-translate-y-2 hover:shadow-2xl">
                <img
                    src={image}
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    alt=""
                />
                <div className="border border-t-0 absolute px-5 py-4 inset-0 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white text-left">
                    <p className='mb-4 text-lg font-bold text-gray-100'>{title}</p>
                    <br />
                    <p className='text-sm tracking-wide text-gray-300'>{subtitle}</p>
                    <br />
                    <p className='text-sm tracking-wide text-gray-300'>Price:{price}</p>
                </div>
            </div>

           </Link>

    );
};

export default Book;