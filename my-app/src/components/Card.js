import "../styles/Card.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CharacterCard = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const date = new Date(data?.created);
  // Format the date into a readable format
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    // timeZoneName: 'short'
  };
  const readableDate = date.toLocaleString('en-US', options);

  return (
    <div>
      <h3>{data?.name}</h3>
      <h4>{data?.species}</h4>
      <img src={data?.image}></img>
      <p>Status: {data?.status}</p>
      <p>Gender: {data?.gender}</p>
      <p>Date Created: {readableDate}</p>
    </div>
  );
};

export default CharacterCard;