import { useEffect, useRef, useState } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters, getJobs, setJobs } from './slice/jobSlice';
import MainContent from './Components/MainContent';

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const existingFilters = useSelector(getFilters);
  const [isLoading, setIsLoading] = useState(false);

  // const selectedJobs = useSelector(getJobs);
  // console.log();
  const containerRef = useRef<HTMLDivElement>(null);

  const [limit, setLimit] = useState(10);
  const increaseLimitHandler = () => {
    setLimit(limit + 10);
  };

  const selectedFilters = useSelector(getFilters);
  // console.log('selected filters', selectedFilters);

  const fetchData = async (limit: number) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const body = JSON.stringify({
      limit: limit,
      offset: 0,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };
    try {
      setIsLoading(true);
      const data = await fetch(
        'https://api.weekday.technology/adhoc/getSampleJdJSON',
        requestOptions
      );
      const text = await data.text();

      const json = await JSON.parse(text);
      // console.log(json?.jdList);
      const jobsList =
        json?.jdList &&
        json?.jdList.map((job) => {
          return { ...job, selected: true };
        });

      // dispatch(setJobs({ jobs: jobsList, filters: selectedFilters }));
      dispatch(setJobs({ jobs: jobsList }));
      dispatch(setJobs({ jobs: jobsList, filters: existingFilters }));
      setIsLoading(false);
    } catch (error) {
      // console.log(error);
      setIsLoading(false);
    }
  };
  const handleIntersection: IntersectionObserverCallback = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      // Fetch more data if container is in view and not currently loading
      increaseLimitHandler();
    }
  };

  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  useEffect(() => {
    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    // Observe the container element
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [handleIntersection, limit]);

  return (
    <div className="appContainer">
      <div className="appArea">
        <section className="sidebar"></section>
        <section className="content">
          <MainContent ref={containerRef}></MainContent>
          {/* <div ref={containerRef}></div> */}
          {/* <button onClick={increaseLimitHandler}>+</button> */}
        </section>
        <section className="profile"></section>
      </div>
    </div>
  );
}

export default App;
