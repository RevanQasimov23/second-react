import React, {useState}  from 'react'
 function Header() {

    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
}

  return (
    <div>
    <p style={{ color: count > 0 ? 'green' : count < 0 ? 'red' : 'black' }}>Rəqəm: {count}</p>
      <button onClick={increment}>Artır</button>
      <button onClick={decrement}>Azalt</button>
    </div>
  );
  
}


export default Header;