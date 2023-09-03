"use client";
/* Instruments */
import {
  useSelector,
  useDispatch,
} from '@/lib/redux/store'
import { getAllProducts } from '@/lib/redux/slices/productSlice/productSlice';
import Product from '../components/ProductItems/Product';
import Header from '../components/Header';
import { useEffect } from 'react';

export default function IndexPage() {
  const status: any = useSelector((state) => state.productSlice.status)
  let products = JSON.parse(localStorage.getItem('product')!)

  const dispatch = useDispatch()
  useEffect(() => {
    if (!products) {
      dispatch(getAllProducts())
    }
  }, []);
  return (
    <>
      {status === 'idle' &&
        <>
          <Header />
          <main className='py-5'>
            {<Product {...products} />}
            <div>

              {/* {JSON.stringify(products)} */}

            </div>
          </main>
        </>

      }

    </>

  )
}

export const metadata = {
  title: 'Redux Toolkit',
}
