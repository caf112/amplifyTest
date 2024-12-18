import React, { useState } from "react"; // 状態管理のためのReactフックをインポート
import { API, graphqlOperation } from "aws-amplify"; // AWS AmplifyのAPIおよびGraphQL操作メソッドをインポート
import { createTodo } from "./graphql/mutations"; // mutations.jsファイルからcreateTodoミューテーションの関数をインポート

// AddTodoコンポーネントの定義
const AddTodo = () => {
  // 入力欄の内容を保持するためのステートを定義
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(""); // 通知メッセージ用のステート

  // ボタンがクリックされた時に呼ばれる関数
  const handleSubmit = async () => {
    const input = { name, description }; // 入力データをオブジェクトにまとめる
    await API.graphql(graphqlOperation(createTodo, { input })); // createTodo ミューテーションと入力データ（input）を渡す
    setName(""); // 登録後フォームをクリア
    setDescription(""); // 登録後フォームをクリア
    setMessage("登録完了"); // 登録完了メッセージを設定

    // 数秒後にメッセージを消す
    setTimeout(() => {
      setMessage("");
    }, 3000); // 3秒後にメッセージをクリア
  };

  return (
    <>
      {/* 名前の入力フィールド */}
      <input
        type="text"
        placeholder="名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* 説明の入力フィールド */}
      <input
        type="text"
        placeholder="説明"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* Todoを追加するボタン */}
      <button onClick={handleSubmit}>登録</button>
      {/* 登録完了メッセージ message ステートに値が設定されている場合にのみ、メッセージを表示します。 */}
      {message && <p>{message}</p>}
    </>
  );
};

// Appコンポーネントの定義
const App = () => {
  return (
    <>
      <AddTodo />
    </>
  );
};

export default App;