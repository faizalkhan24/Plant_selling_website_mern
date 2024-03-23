import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAsync } from '../features/products/productsSlice';
import ProductImages from '../features/products/Components/ProductImages';
import ProductInfo from '../features/products/Components/ProductInfo';
import ProductSummary from '../features/products/Components/ProductSummary';
import NoDataFound from '../features/common/NoDataFound';

const ProductPage = () => {
  const product = useSelector(state => state.products.product);
  const isLoading = useSelector(state => state.products.isLoading);
  const dispatch = useDispatch();

  document.title = product ? product.plantName : "Plant info";

  const params = useParams();
  const _id = params.id;

  useEffect(() => {
    dispatch(getProductAsync(_id));
  }, []);

  return (
    <>
      {
        product ?
          <div className='container mt-3 p-2 bg-light'>
            <div className="row">
              <ProductImages />
              <ProductInfo />
              <ProductSummary />
            </div>
          </div >
          :
          <NoDataFound link="/products" message="Back To Products" />
      }
    </>
  )
}

export default ProductPage