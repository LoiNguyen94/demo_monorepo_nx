import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { Header, Footer } from '@monomio/ui-shared';
import { ItemPromotionDay } from '@monomio/interfaces';
import { funcShares, funcChangeColor } from '@monomio/func-shares';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './../store/slices/countSlice';

export const items: ItemPromotionDay[] = [
  {
    id: 1,
    title: 'Thịt thăn cổ bò Úc (đông lạnh) - 500gr',
    beforediscount: 200000,
    afterdiscount: 100000,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#F0224F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.74989 11.125C6.26664 11.125 5.87489 11.5168 5.87489 12C5.87489 12.4832 6.26664 12.875 6.74989 12.875L11.125 12.875L11.125 17.25C11.125 17.7333 11.5167 18.125 12 18.125C12.4832 18.125 12.875 17.7333 12.875 17.25L12.875 12.875H17.2499C17.7331 12.875 18.1249 12.4832 18.1249 12C18.1249 11.5168 17.7331 11.125 17.2499 11.125H12.875L12.875 6.75C12.875 6.26675 12.4832 5.875 12 5.875C11.5167 5.875 11.125 6.26675 11.125 6.75L11.125 11.125L6.74989 11.125Z"
          fill="white"
        />
      </svg>
    ),
    link: '',
  },
  {
    id: 2,
    title: 'Dưa lưới Hàn Quốc nguyên trái - 1kg',
    beforediscount: 200000,
    afterdiscount: 100000,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#F0224F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.74989 11.125C6.26664 11.125 5.87489 11.5168 5.87489 12C5.87489 12.4832 6.26664 12.875 6.74989 12.875L11.125 12.875L11.125 17.25C11.125 17.7333 11.5167 18.125 12 18.125C12.4832 18.125 12.875 17.7333 12.875 17.25L12.875 12.875H17.2499C17.7331 12.875 18.1249 12.4832 18.1249 12C18.1249 11.5168 17.7331 11.125 17.2499 11.125H12.875L12.875 6.75C12.875 6.26675 12.4832 5.875 12 5.875C11.5167 5.875 11.125 6.26675 11.125 6.75L11.125 11.125L6.74989 11.125Z"
          fill="white"
        />
      </svg>
    ),
    link: '',
  },
  {
    id: 3,
    title: 'Chanh tươi - 300gr',
    beforediscount: 200000,
    afterdiscount: 100000,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#F0224F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.74989 11.125C6.26664 11.125 5.87489 11.5168 5.87489 12C5.87489 12.4832 6.26664 12.875 6.74989 12.875L11.125 12.875L11.125 17.25C11.125 17.7333 11.5167 18.125 12 18.125C12.4832 18.125 12.875 17.7333 12.875 17.25L12.875 12.875H17.2499C17.7331 12.875 18.1249 12.4832 18.1249 12C18.1249 11.5168 17.7331 11.125 17.2499 11.125H12.875L12.875 6.75C12.875 6.26675 12.4832 5.875 12 5.875C11.5167 5.875 11.125 6.26675 11.125 6.75L11.125 11.125L6.74989 11.125Z"
          fill="white"
        />
      </svg>
    ),
    link: '',
  },
  {
    id: 4,
    title: 'Sườn non heo chặt sẵn (thịt tươi) - 500gr',
    beforediscount: 200000,
    afterdiscount: 100000,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#F0224F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.74989 11.125C6.26664 11.125 5.87489 11.5168 5.87489 12C5.87489 12.4832 6.26664 12.875 6.74989 12.875L11.125 12.875L11.125 17.25C11.125 17.7333 11.5167 18.125 12 18.125C12.4832 18.125 12.875 17.7333 12.875 17.25L12.875 12.875H17.2499C17.7331 12.875 18.1249 12.4832 18.1249 12C18.1249 11.5168 17.7331 11.125 17.2499 11.125H12.875L12.875 6.75C12.875 6.26675 12.4832 5.875 12 5.875C11.5167 5.875 11.125 6.26675 11.125 6.75L11.125 11.125L6.74989 11.125Z"
          fill="white"
        />
      </svg>
    ),
    link: '',
  },
];

export function Index(props) {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.count);
  const router = useRouter();

  useEffect(() => {
    console.log(funcShares());
  }, []);

  const handleClick = () => {
    const color = funcChangeColor();
    setColor(color);
  };
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Header type={'consumer'} bg={color} />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button
          onClick={() => router.push('./home', undefined, { shallow: true })}
        >
          gohhome
        </button>
        <button
          onClick={() => router.push('./product', undefined, { shallow: true })}
        >
          hàng hóa
        </button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>{count?.value}</h1>
      </div>
      <div onClick={handleClick}>Click đây đổi màu header nè</div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome" style={{}}>
            <h1>
              <span> Hello there, </span>
              Welcome consumer 👋
            </h1>
          </div>
          {items.map((item) => (
            <div key={item.id}>
              {item.icon}
              <br />
              {item.title}
              <br />
              {item.afterdiscount}
              <br />
              {item.beforediscount}
              <br />
            </div>
          ))}
        </div>
      </div>
      <Footer type={'partner'} />
    </div>
  );
}

export default Index;
