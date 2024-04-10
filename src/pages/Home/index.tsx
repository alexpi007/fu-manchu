import React, { useEffect, useState } from 'react';
import { StoreContext } from './../../contexts/StoreContext';

function Home() {
  const store = React.useContext(StoreContext);
  const { count, increment, reset } = store;

  const [refreshStatement, setRefreshStatement] = useState({ color: '', state: '', font: 0 });

  useEffect(() => increment(), []);

  useEffect(() => {
    switch (count) {
      case 5:
        setRefreshStatement({ color: 'green', state: 'You are a super refresher!', font: 20 });
        break;
      case 10:
        setRefreshStatement({ color: 'orange', state: 'You are a mega refresher!!', font: 40 });
        break;
      case 20:
        setRefreshStatement({ color: 'red', state: 'You are the king of refresher!!!', font: 60 });
        break;
      default:
        setRefreshStatement({ color: '', state: '', font: 0 });
    }
  }, [count]);

  const handleReset = () => {
    setRefreshStatement({ color: '', state: '', font: 0 });
    reset();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Refresh review</h2>
      <div>
        <h1>Number of page render: {count}</h1>
        <button onClick={handleReset}>reset</button>
        <br />
        <br />
        <p
          style={{
            textAlign: 'center',
            fontSize: refreshStatement.font,
            color: `${refreshStatement.color}`,
          }}
        >
          {refreshStatement.state}
        </p>
      </div>
    </div>
  );
}

export default Home;
