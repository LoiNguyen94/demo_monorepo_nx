import Image from 'next/image';
import { useRouter } from 'next/router';
import { formatMoneyVND } from '@monomio/func-shares';
import { Row, Col, Card, PageHeader } from 'antd';

const { Meta } = Card;

function Index({ data }) {

  const router = useRouter();

  const goDetail = (id: string) => {
    router.push(`home/${id}`);
  };

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.back()}
        title="Trang chủ"
        subTitle="Tất cả sản phẩm trang chủ"
      />
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
                  <Card
                    onClick={() => goDetail(item?.id)}
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
                      <div key="price">
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
    </div>
  );
}

export async function getStaticProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://dev-api.itaphoa.com/customer/products`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
