import React, { useEffect, useState } from "react"; // 状態管理のためのReactフックをインポート
import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"; // React Router のインポート
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { listUsers } from "./graphql/queries";
import { Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UserDetails from "./UserDetails";

Amplify.configure(awsconfig);

const App = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // ページ遷移用のフック

  useEffect(() => {
    fetchUsers();
  }, []); // 無限ループが発生してしまうため、2番目のパラメータとして空の配列を入れる

  const fetchUsers = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      const userList = userData.data.listUsers.items;
      setUsers(userList);
    } catch (error) {
      console.error("Error on fetching users:", error);
    }
  };

  const handleDeleteClick = (userId) => {
    // `UserDetails` にページ遷移し、ユーザー ID をクエリパラメータに渡す
    navigate(`/details/${userId}`);
  };

  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Welcome, {user?.username}</h1>
            <div>
              <button onClick={signOut}>Sign Out</button>
            </div>
            <div className="userlist">
              {users.map((dyuser) => (
                <Paper key={dyuser.id} variant="outlined">
                  <div className="userCard">
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteClick(dyuser.id)} // ボタン押下時にページ遷移
                    >
                      <DeleteIcon />
                    </IconButton>
                    {user.username === dyuser.username ? (
                      <div>
                        <div>{dyuser.id}</div>
                        <div>{dyuser.username}</div>
                        <div>{dyuser.githubAccount}</div>
                      </div>
                    ) : (
                      <p>やっほー</p>
                    )}
                  </div>
                </Paper>
              ))}
            </div>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
