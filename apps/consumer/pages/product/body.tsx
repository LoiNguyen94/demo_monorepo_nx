import { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import styles from './product.module.scss';
import Image from 'next/image';
import { formatMoneyVND } from '@monomio/func-shares';

const { Meta } = Card;

export function Body({ data }) {
  useEffect(() => {
    // console.log(data[0]?.market_price);
  }, []);

  return (
    <Row style={{ marginLeft: 0, marginRight: 0 }} gutter={[16, 16]}>
      {data &&
        data.map(
          (item: any) =>
            item.photo && (
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
              </Col>
            )
        )}
    </Row>
  );
}

export default Body;
