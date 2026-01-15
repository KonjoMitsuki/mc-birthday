import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  // ★情報を変更してください
  const FRIEND_NAME = "SO";
  const MINECRAFT_CODE = "ABCD-EFGH-IJKL-MNOP";

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#568430', '#5D4037', '#ffffff']
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(MINECRAFT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <h1 className="title">
        HAPPY BIRTHDAY<br />{FRIEND_NAME}!
      </h1>

      <div className="chest" onClick={handleOpen}>
        {isOpened ? '🎁' : '📦'}
        {!isOpened && <div style={{fontSize: '10px', color: '#ccc', textAlign: 'center', marginTop: '10px'}}>TAP TO OPEN</div>}
      </div>

      {isOpened && (
        <div className="mc-panel">
          <p style={{textAlign: 'center', fontSize: '12px'}}>YOU GOT MINECRAFT!</p>
          
          <div className="code-box">
            {MINECRAFT_CODE}
          </div>

          <button className="mc-button" onClick={handleCopy}>
            {copied ? "COPIED!" : "COPY CODE"}
          </button>

          <a href="https://www.minecraft.net/ja-jp/redeem" target="_blank" rel="noreferrer" className="mc-button mc-button-green">
            引き換え場所はこちら！！
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
