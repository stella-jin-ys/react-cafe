import React, { useState } from 'react';


const reviewsData = [
  { id: 1, name: 'John Doe', rating: 5, comment: 'Great place!', date: '2023-10-01', location: 'New York' },
  { id: 2, name: 'Jane Smith', rating: 4, comment: 'Good coffee.', date: '2023-10-02', location: 'Los Angeles' },
  { id: 3, name: 'Sam Wilson', rating: 3, comment: 'Average experience.', date: '2023-10-03', location: 'Chicago' },
];

export default function Review() {
  const [reviews, setReviews] = useState(reviewsData);

  return (
    <div className='bg-gray p-4 flex flex-col items-center justify-center h-full'>
      <div className='relative w-full max-w-screen-xl h-full'>
      <div className='flex flex-wrap justify-center h-full' dir='rtl'>
        {reviews.map((review) => (
        <div key={review.id} className='bg-white p-6 rounded-lg shadow-lg m-4 w-full md:w-1/2 lg:w-1/3' dir='ltr'>
          <div className='mb-4'>
          <h2 className='text-2xl font-bold mb-2'>{review.name}</h2>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z' />
            </svg>
            ))}
          </div>
          </div>
          <p className='text-gray-700 mb-4'>{review.comment}</p>
          <div className='text-sm text-gray-500'>{review.date} - {review.location}</div>
        </div>
        ))}
      </div>
      </div>
      <button
      className='bg-blue-500 text-white p-2 rounded mt-4'
      onClick={() => {
        const newReview = {
        id: reviews.length + 1,
        name: 'New Reviewer',
        rating: 4,
        comment: 'Nice place!',
        date: '2023-10-04',
        location: 'San Francisco',
        };
        setReviews([...reviews, newReview]);
      }}
      >
      Write a Review
      </button>
    </div>
  );
}
