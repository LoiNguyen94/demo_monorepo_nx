import { setPriority } from 'os';

/* eslint-disable-next-line */
export interface TestComProps {
  getPro: any;
  setPro: any;
  slice: any;
}

export function TestCom(props: TestComProps) {
  const { getPro, setPro, slice } = props;
  const randomNumber = () => {
    const data = {
      id: 1,
      value: Math.floor(Math.random() * 1114),
    };
    setPro(slice(data));
  };

  return (
    <div className={'container'}>
      <div>
        Dữ liệu
        {JSON.stringify(getPro)}
      </div>
      <div onClick={randomNumber}>Click để truyền giá trị</div>
    </div>
  );
}

export default TestCom;
