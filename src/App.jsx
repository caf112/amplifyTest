import React, { useEffect, useState } from "react"; // 状態管理のためのReactフックをインポート

import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react"
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css"
import { listUsers } from "./graphql/queries";

Amplify.configure(awsconfig);


const App = () => {

  const [users,setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
    // const checkAuth = async () => {
    //   try {
    //     const session = await Auth.currentSession();
    //     console.log(`Current session token:`, session.getIdToken().getJwtToken());
    //   }catch (error) {
    //     console.error(`Authentication error:` ,error);
    //   }
    // };
    // checkAuth();
  },[])//無限ループが発生してしまうため、2番目のパラメータとして空の配列を入れる

  const fetchUsers = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      console.log(`API Response:`,userData);
      const userList = userData.data.listUsers.items;
      console.log(`user list`,userList);

      setUsers(userList)

    } catch(error) {
      console.error(`error on fetching users`,error);
      
      if (error.errors) {
        error.errors.forEach((err) => {
          console.error("GraphQL error:",err.message,err.path,err.extensions);
        })
      }
    }
  }

  return (
    <div className="App">
    <Authenticator >
      {({signOut,user}) => (
        <div>
          {/* {console.log(user)} */}
          <h1>Welcome,{user?.username}</h1>
          <button onClick={signOut}>signout</button>
        </div>
      )}
    </Authenticator>
    </div>
  );
};

export default App;