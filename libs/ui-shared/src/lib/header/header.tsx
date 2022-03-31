import styles from './header.module.scss';
import Image from 'next/image'
import Wobby from './../../../assets/wobby.png';

/* eslint-disable-next-line */
export interface HeaderProps {
  type: string
}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Đây là cái đầu dùng chung đang được import ở {props.type}</h1>
      <Image
        src={Wobby}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
}

export default Header;
