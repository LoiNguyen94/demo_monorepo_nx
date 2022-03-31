import styles from './index.module.scss';
import { Header, Footer } from '@monomio/ui-shared'

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Header type={'partner'} />
      <div className="wrapper">
        <div className="container">
          <div id="welcome" style={{ height: screen.height - 560 }}>
            <h1>
              <span> Hello there, </span>
              Welcome partner 👋
            </h1>
          </div>
        </div>
      </div>
      <Footer type={'partner'} />
    </div>
  );
}

export default Index;
