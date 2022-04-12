import { TestCom } from '@monomio/ui-shared';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from './../../store/slices/addProductSlice';

export default function Info() {
  const dispatch = useDispatch();
  const product = useSelector((state: any) => state?.AddProduct);

  return (
    <div>
      <TestCom getPro={product} setPro={dispatch} slice={setProduct} />
    </div>
  );
}
