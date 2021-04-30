import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const FriendsProfile = () => {
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res);
        setFriendsData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="friends">
      <nav>
        <h4>Welcome to Friends Profile</h4>
        <Link to="/friends/addfriend">
          <Button color="success" size="lg">
            Add Friend
          </Button>
        </Link>
      </nav>
      {friendsData.map((friend) => {
        return (
          <div className="friend" key={friend.id} >
            <h2>{friend.name}</h2>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
            <Link to={`/friends/edit/${friend.id}`}>
              <Button color="link" size="lg">
                Edit
              </Button>
            </Link>
            <Button color="link" size="lg">
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsProfile;
