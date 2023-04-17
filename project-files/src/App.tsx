import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const countString = localStorage.getItem('count');
    if (countString) {
      setCount(JSON.parse(countString));
    }
  }, []);

  useEffect(() => {
    switch (count) {
      case 1:
        setMessage("Best of luck!");
        break;

      case (10):
        setMessage("That many applications already? Hope you get an interview!");
        break;

      case (25):
        setMessage("Don't give up! Your time will come!");
        break;

      case (50):
        setMessage("I can see you are working hard and I am proud of you!");
        break;

      case (100):
        setMessage("Frustrating, isn't it? But you can do it! Remember your dream...");
        break;

      case (250):
        setMessage("We are proud of you for taking it so far. Soon you will get noticed");
        break;

      case (500):
        setMessage("Never forget: you are a great developer! Your dream will come true!");
        break;

      case (1000):
        setMessage("If only you knew how many people are rooting for you right now... I wish I could hire you myself, but since I can't, please remember this: You are not alone!");
        break;

      case (2500):
        setMessage("you are lying lol");
        break;
    }

    localStorage.setItem('count', JSON.stringify(count))
  });




  return (
    <div className="App">
      <div className='container'>
        <div className='card'>
          <button onClick={() => setCount(count + 1)}>Applied? Good luck this time!</button>
          <h1>How Many Applies?</h1>
          <p>{count}</p>
          <h2>{message}</h2>
        </div>
      </div>
      <button className='reset-button' onClick={() => setCount(0)}>I got hired!!!</button>
    </div>
  )
}

export default App
