import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export function useInfinite() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // 이벤트
  const hanlder = () => {
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
      //   fetchData();
    }
  };

  // 데이터 요청
  const fetchData = useCallback(async () => {
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`,
      )
      .then((res) => {
        setData((data) => [...data, ...res.data]);
      });
  }, [page]);

  // 페이지 변경되면 데아터 요청
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener('scroll', hanlder);
    return () => {
      window.removeEventListener('scroll', hanlder);
    };
  });

  return {
    data,
  };
}
