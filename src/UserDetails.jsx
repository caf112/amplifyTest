import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // URL パラメータ取得
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "./graphql/queries";

const UserDetails = () => {
  const { id } = useParams(); // URL からユーザー ID を取得
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(getUser, { id }));
      setUserDetails(userData.data.getUser);
    } catch (err) {
      console.error("Error fetching user details:", err);
      setError(err);
    }
  };

  if (error) {
    return <p>Error fetching user details: {error.message}</p>;
  }

  if (!userDetails) {
    return <p>Loading user details...</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {userDetails.userid}</p>
      <p>Username: {userDetails.username}</p>
      <p>GitHub Account: {userDetails.githubAccount}</p>
      <h3>Cleared Stages</h3>
      <ul>
        {userDetails.clearedStages?.items.map((stage) => (
          <li key={stage.id}>
            {stage.stageName} - Score: {stage.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
