import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = () => {
  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;
  const { sort } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, sort));
  }, [dispatch, keyword, pageNumber, sort]);

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      {keyword ? (
        <Row>
          <Col lg={10} md={9}>
            <h1>Results</h1>
          </Col>
          <Col lg={2} md={3}>
            <select
              value={sort}
              onChange={(e) => {
                navigate(`/search/${keyword}/sort/${e.target.value}`);
              }}
            >
              <option value='newest'>Newest</option>
              <option value='lowest'>Price: Low to high</option>
              <option value='highest'>Price: High to low</option>
              <option value='toprated'>Top rated</option>
            </select>
          </Col>
        </Row>
      ) : (
        <h1>Lasted Products</h1>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
