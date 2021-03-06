import { Card, PageHeader, Divider, Button } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { formatMoneyVND } from '@monomio/func-shares';
import { useState } from 'react';

const DetailPro = ({ detail, errors }: any) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  if (errors) {
    return <span style={{ color: 'red' }}>ERR: {errors}</span>;
  }
  const handleQuan = (key: number) => {
    switch (key) {
      case 1:
        if (quantity >= 2) setQuantity(quantity - 1);
        break;
      case 2:
        setQuantity(quantity + 1);
        break;
    }
  };
  console.log(detail);

  return (
    <>
      <Head>
        <title>{detail?.name}</title>
        <meta property="og:title" content={detail?.name} key="title" />
        <meta property="og:description" content={detail?.log_time} />
        <meta property="og:image" content={detail?.photo} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 24,
                  }}
                >
                  <Button
                    onClick={() => handleQuan(1)}
                    style={{ fontSize: 14 }}
                    type="text"
                    danger
                  >
                    -
                  </Button>
                  <div>{quantity}</div>
                  <Button
                    onClick={() => handleQuan(2)}
                    style={{ fontSize: 14 }}
                    type="text"
                    danger
                  >
                    +
                  </Button>
                </div>
                <div style={{ width: '100%', marginBottom: 20 }}>
                  <div style={{ fontWeight: 'bold' }}>{detail?.name}</div>
                  <div style={{ color: 'red' }}>
                    {formatMoneyVND(parseInt(detail?.market_price) * quantity)}
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

export default DetailPro;

export async function getServerSideProps(context) {
  try {
    const id = context?.params?.id;
    const res = await fetch(
      `https://dev-api.itaphoa.com/customer/products/${id}`
    );
    const detail = await res.json();
    return { props: { detail } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
}

// export const getSer = async ({ params }) => {
//   try {
//     const id = params?.id;
//     const res = await fetch(
//       `https://dev-api.itaphoa.com/customer/products/${id}`
//     );
//     const detail = await res.json();
//     return { props: { detail } };
//   } catch (err: any) {
//     return { props: { errors: err.message } };
//   }
// };
