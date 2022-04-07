import styles from './footer.module.scss';
import Image from 'next/image';
import Wobby from './../../assets/wobby.png';

/* eslint-disable-next-line */
export interface FooterProps {
  type: string;
}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Đây là cái đuôi dùng chung đang được import ở {props.type}</h1>
      <Image
        src={Wobby}
        alt="Picture of the author"
        width={100}
        height={100}
      />
    </div>
  );
}

export default Footer;
