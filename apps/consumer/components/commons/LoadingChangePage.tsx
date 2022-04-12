import React, { useEffect, useState } from 'react';
import { Modal, Spin } from 'antd';

export interface ModalLoadingProps {
  isModalVisible: boolean;
}

const ModalLoading = (props: ModalLoadingProps) => {
  const [conutLoadTime, setCountLoadTime] = useState(0);
  const { isModalVisible } = props;

  useEffect(() => {
    const upCount = setInterval(() => {
      setCountLoadTime(conutLoadTime + 1);
    }, 1000);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      clearInterval(upCount);
    };
  }, [conutLoadTime]);

  return (
    <>
      <Modal
        visible={isModalVisible}
        // onOk={handleOk}
        // onCancel={handleCancel}
        footer={null}
        closable={false}
        centered={true}
        bodyStyle={{ backgroundColor: 'navajowhite' }}
      >
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h1>{conutLoadTime}</h1>
          <Spin />
        </div>
      </Modal>
    </>
  );
};
export default ModalLoading;
