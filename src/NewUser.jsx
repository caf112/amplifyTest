import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "./graphql/mutations"; // GraphQLのミューテーションをインポート
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4} from "uuid"
import { IconButton,HomeIcon } from "@mui/material";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [githubAccount, setGithubAccount] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    try {
      const input = {
        id: uuidv4(),
        username,
        userid,
        githubAccount,
      };
      await API.graphql(graphqlOperation(createUser, { input }));
      alert("User created successfully!");
      navigate("/"); // 作成後にホームにリダイレクト
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user.");
    }
    
  };

  return (
    <div>
      <h2>Create New User</h2>
      <Link to="/">HomeIcon</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateUser();
        }}
      >
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Userid:</label>
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
          />
        </div>
        <div>
          <label>GitHub Account:</label>
          <input
            type="text"
            value={githubAccount}
            onChange={(e) => setGithubAccount(e.target.value)}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default NewUser;
