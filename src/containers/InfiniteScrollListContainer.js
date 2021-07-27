import React from 'react';
import InfiniteScrollList from '../components/InfiniteScrollList';
import { useInfinite } from '../hooks/useInfinite';

const InfiniteScrollListContainer = () => {
  // custom
  const { data } = useInfinite();

  return <InfiniteScrollList data={data} />;
};

export default InfiniteScrollListContainer;
