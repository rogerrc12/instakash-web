import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useFetch = (url, options, method) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios[method](url, options);
        setResponse(res.data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  return { response, error }
}