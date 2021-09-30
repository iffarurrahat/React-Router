import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Friend from './../Friend/Friend';
import { useHistory } from 'react-router-dom';

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  const history = useHistory();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setFriend(data));
  }, []);

  const handleClick = () => {
    history.push('/friends');
  };

  return (
    <div>
      <h3>Friend Detail of: {friendId}</h3>
      <h1>{friend.name}</h1>
      <h2>{friend.phone}</h2>
      <h4>{friend.website}</h4>
      <p>Work at: {friend.company?.name}</p>
      <button onClick={handleClick}>See All Friend</button>
    </div>
  );
};

export default FriendDetail;
