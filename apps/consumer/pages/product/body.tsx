import { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { useRouter } from 'next/router';
import styles from './product.module.scss';
import Image from 'next/image';
import { formatMoneyVND } from '@monomio/func-shares';
import Link from 'next/link';
import ModalLoading from './../../components/commons/LoadingChangePage';

const { Meta } = Card;

export function Body({ data }) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setVisible(true);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <ModalLoading isModalVisible={visible} />
      <Row style={{ marginLeft: 0, marginRight: 0 }} gutter={[16, 16]}>
        {data &&
          data.map(
            (item: any, index: number) =>
              item.photo &&
              index < 30 && (
                <Col
                  lg={4}
                  sm={6}
                  xs={8}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  key={item.id}
                  //   span={4}
                >
                  <Link href={`/product/${item?.id}`}>
                    <a>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={
                          <Image
                            alt="example"
                            src={item?.photo}
                            width={240}
                            height={230}
                            priority
                          />
                        }
                        actions={[
                          <div key="price" className={styles['rainbow']}>
                            {formatMoneyVND(item?.market_price)}
                          </div>,
                          <Image
                            key="plus"
                            alt="example"
                            src={'/pluscart.png'}
                            width={24}
                            height={24}
                            priority
                          />,
                        ]}
                      >
                        <Meta title={item?.name} description={item?.category} />
                      </Card>
                    </a>
                  </Link>
                </Col>
              )
          )}
      </Row>
    </>
  );
}

export default Body;
