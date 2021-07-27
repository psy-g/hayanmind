import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { throttle } from 'lodash';

const THROTTLE_WAIT = 1000;

export function useInfinite() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // 데이터 요청
  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`,
    );

    setData((data) => [...data, ...response.data]);
  }, [page]);

  // 페이지 변경되면 데아터 요청
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    // 이벤트
    const handler = throttle(() => {
      const { documentElement, body } = document;

      // 스크롤 높이
      const scrollHeight = Math.max(
        documentElement.scrollHeight,
        body.scrollHeight,
      );

      // 스크롤 위치
      const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);

      // 브라우저 내부 높이
      const clientHeight = documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        setPage((page) => page + 1);
      }
    }, THROTTLE_WAIT);

    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return {
    data,
  };
}
