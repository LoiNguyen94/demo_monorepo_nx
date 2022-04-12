import { Card, PageHeader, Divider, Button } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { formatMoneyVND } from '@monomio/func-shares';

const StaticPropsDetail = ({ detail, errors }: any) => {
  const router = useRouter();

  if (errors) {
    return <span style={{ color: 'red' }}>ERR: {errors}</span>;
  }

  return (
    <>
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => router.back()}
          title="Chi tiết "
          subTitle="Tất cả sản phẩm trang chủ"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Card style={{ width: 500 }} hoverable>
            {detail && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Image
                  alt="example"
                  src={detail?.photo}
                  width={240}
                  height={230}
                  priority
                />
                <Divider />
                <div style={{ width: '100%', marginBottom: 20 }}>
                  <div style={{ fontWeight: 'bold' }}>{detail?.name}</div>
                  <div style={{ color: 'red' }}>
                    {formatMoneyVND(detail?.market_price)}
                  </div>
                  <div>
                    tags: <br />
                    <div
                      style={{
                        padding: '5px 10px',
                        backgroundColor: '#f3951f',
                        borderRadius: 8,
                        color: '#ffffff',
                        width: 'fit-content',
                      }}
                    >
                      {detail?.info?.tags}
                    </div>
                  </div>
                </div>
                <Button style={{ width: '100%' }} type="primary">
                  Thêm vào giỏ hàng
                </Button>
                <Divider />
                <div>
                  <div style={{ fontWeight: 'bold' }}> Miêu tả:</div>
                  {detail?.info?.description}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default StaticPropsDetail;

export const getStaticPaths = async () => {
  const res = await fetch(`https://dev-api.itaphoa.com/customer/products`);
  const data = await res.json();
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const res = await fetch(
      `https://dev-api.itaphoa.com/customer/products/${id}`
    );
    const detail = await res.json();
    return { props: { detail } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
