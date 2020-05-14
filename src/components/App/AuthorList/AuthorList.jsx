import React from 'react';
import PropTypes from 'prop-types';

const AuthorList = ({ authors }) => {
  const authorsList = authors.map((author, i) => (
    <li key={i}>
      <p>{author.name}
      </p>
    </li>
  ));
    
  return (
    <ul> 
      {authorsList}
    </ul>
  );
   
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};
