import React, { useState } from "react"; // 状態管理のためのReactフックをインポート

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react"
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css"

Amplify.configure(awsconfig);


// Appコンポーネントの定義
const App = () => {
  return (
    <>
    <Authenticator >
      {({signOut,user}) => (
        <div>
          {console.log(user)}
          <h1>Welcome,{user?.username}</h1>
          <button onClick={signOut}>signout</button>
        </div>
      )}
    </Authenticator>
    </>
  );
};

export default App;