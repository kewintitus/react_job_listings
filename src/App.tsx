import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs, setJobs } from './slice/jobSlice';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const selectedJobs = useSelector(getJobs);
  console.log(selectedJobs.jobs);

  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };
    try {
      const data = await fetch(
        'https://api.weekday.technology/adhoc/getSampleJdJSON',
        requestOptions
      );
      const text = await data.text();

      const json = await JSON.parse(text);

      dispatch(setJobs(json?.jdList));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
