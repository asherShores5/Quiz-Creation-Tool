import React, { useState, useEffect } from 'react';

const CatImage = () => {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(data => setCatImage(data.file))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {catImage ? <img src={catImage} alt="Random cat" style={{ width: 400, height: 400 }} /> : 'Loading...'}
    </div>
  );
};

export default CatImage;