import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Searchbox = () => {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // remove whitespace start and end of string
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };
  return (
    <Form className='d-flex' onSubmit={submitHandler}>
      <Form.Control
        type='search'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search'
        className='mr-sm-2 ml-sm-5 mt-2'
      ></Form.Control>
      <Button type='submit' variant='light' className='p-2 mt-2'>
        <svg width='15px' height='15px'>
          <path d='M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 '></path>
        </svg>
      </Button>
    </Form>
  );
};

export default Searchbox;
