import styles from './header.module.scss';
import Image from 'next/image';
import Wobby from './../../assets/wobby.png';
/* eslint-disable-next-line */

export interface HeaderProps {
  type: string;
  bg: string;
}

export function Header(props: HeaderProps) {
  const { type, bg } = props;
  return (
    <div
      className={styles['container']}
      style={bg ? { backgroundColor: bg } : {}}
    >
      <h1>Đây là cái đầu dùng chung đang được import ở {type}</h1>
      <Image
        src={Wobby}
        alt="Picture of the author"
        width={100}
        height={100}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
}

export default Header;
