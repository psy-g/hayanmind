import React from 'react';
import styled from 'styled-components';

const InfiniteScrollList = ({ data }) => {
  return (
    <Container>
      {(data || []).map((ele, index) => (
        <Wrapper key={index}>
          <Id>
            <span>Comment Id</span>
            <span>{ele.id}</span>
          </Id>
          <Email>
            <span>Email</span>
            <span>{ele.email}</span>
          </Email>
          <Comment>
            <span>Comment</span>
            <span>{ele.body}</span>
          </Comment>
        </Wrapper>
      ))}
    </Container>
  );
};

export default InfiniteScrollList;

// container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 33px;
`;

// wrapper
const Wrapper = styled.div`
  width: 500px;
  height: 193px;
  background-color: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  margin-bottom: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;

  div {
    /* margin-left: 20px; */
    /* margin-right: 20px; */
  }
`;

// id
const Id = styled.div`
  span:nth-child(1) {
    font-weight: bold;
    margin-right: 12px;
  }
`;

// email
const Email = styled.div`
  span:nth-child(1) {
    font-weight: bold;
    margin-right: 12px;
  }
`;

// comment
const Comment = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    font-weight: bold;
    margin-right: 12px;
  }

  span:nth-child(2) {
    margin-top: 2px;
  }
`;
