import { Footer, Navbar } from "..";
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
