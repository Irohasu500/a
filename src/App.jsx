import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
//Reactの中で{}を使用すると、jsと認識される。
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //Stateを使う。 変数　更新関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //以下のように、styleでcssが書ける。{{}}はjsの中にオブジェクトを書いている
  //以下　propsの設定
  //タグで囲った中身を渡すことも可能
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountUp}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)/</p>}
    </>
  );
};
//他のjsでも使用可能にする
export default App;

//コンポーネントにする場合はjsxとするといい。
//Reactの命名規則は、パスカルケースで！
