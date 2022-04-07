// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function Index({ hero }) {
  const count = useSelector((state: any) => state.count);

  //   useEffect(() => {

  //   }, []);

  return (
    <div>
      <h1>{count?.value}</h1>
      <h2>{hero[0]?.name}</h2>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      hero: [
        {
          id: 1,
          name: 'Super Man',
        },
      ],
    }, // will be passed to the page component as props
  };
}

export default Index;
