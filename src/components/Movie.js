import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TOGGLE_LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!) {
    toggleLikeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ id, bg, isLiked = false }) => {
  const [toggleLikeMovie] = useMutation(TOGGLE_LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={toggleLikeMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
    </Container>
  );
};
