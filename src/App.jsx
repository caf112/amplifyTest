import React, { useEffect, useState } from "react"; // 状態管理のためのReactフックをインポート

import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react"
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css"
import { listUsers } from "./graphql/queries";
import { Paper,IconButton } from "@mui/material";
import DeleteIcon from"@mui/icons-material/Delete"

Amplify.configure(awsconfig);


const App = () => {

  const [users,setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  },[])//無限ループが発生してしまうため、2番目のパラメータとして空の配列を入れる

  const fetchUsers = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      const userList = userData.data.listUsers.items;
      console.log(`user list`,userList);
      setUsers(userList)

    } catch(error) {
      console.error(`error on fetching users`,error);
    }
  }

  return (
    <div className="App">
    <Authenticator >
      {({signOut,user}) => (
        <div>
          {/* {console.log(user)} */}
          <h1>Welcome,{user?.username}</h1>
          <div>
          < button onClick={signOut}>signout</button>
          </div>
          <div className="userlist">
            {users.map(dyuser => {
              return (
                <Paper variant="outlined">
                  <div className="userCard">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                    {user.username == dyuser.username ?(
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
              )
            })}
          </div>
        </div>
      )}
    </Authenticator>
    </div>
  );
};

export default App;