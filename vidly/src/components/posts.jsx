import React from 'react';
import { useParams } from 'react-router-dom';

const Posts = () => {
  const { year, month } = useParams();
  // const params = useParams();
  // yukarıdaki iki yöntem de oluyor...

  return (
    <div>
      <h1>Posts</h1>
      Year: {year} , Month: {month}
      {/* Year: {params.year} , Month: {params.month} */}
    </div>
  );
};

export default Posts;
