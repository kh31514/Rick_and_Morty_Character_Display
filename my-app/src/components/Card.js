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
    <div className="card">
      <h3 className="name">{data?.name}</h3>
      <h4 className="species">{data?.species}</h4>
      <img src={data?.image}></img>
      <div className="details">
        <p><b>Status:</b> {data?.status}</p>
        <p><b>Gender:</b> {data?.gender}</p>
        <p><b>Date Created:</b> {readableDate}</p>
      </div>
    </div>
  );
};

export default CharacterCard;