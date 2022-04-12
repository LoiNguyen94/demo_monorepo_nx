import dynamic from 'next/dynamic';
import { Button } from 'antd';

/* eslint-disable-next-line */
const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });
export interface TestComProps {
  getPro: any;
  setPro: any;
  slice: any;
}

export function TestCom(props: TestComProps) {
  const { getPro, setPro, slice } = props;

  const randomNumber = () => {
    const data = {
      id: Math.floor(Math.random() * 1114) - 111,
      value: Math.floor(Math.random() * 1114),
    };
    setPro(slice(data));
  };

  return (
    <div className={'container'}>
      <div>
        Dữ liệu
        <DynamicReactJson src={getPro} />
      </div>
      <Button type="primary" onClick={randomNumber}>
        Click để truyền giá trị
      </Button>
    </div>
  );
}

export default TestCom;
