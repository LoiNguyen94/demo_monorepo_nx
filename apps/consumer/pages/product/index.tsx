import { useEffect } from 'react';
import { PageHeader } from 'antd';
import { useRouter } from 'next/router';
import Body from './body';

export function Index({ data }) {
  const router = useRouter();

  useEffect(() => {
    // console.log(data);
  }, []);

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.back()}
        title="Sản phẩm"
        subTitle="Tất cả sản phẩm"
      />
      <div>
        <Body data={data} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dev-api.itaphoa.com/customer/products`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
