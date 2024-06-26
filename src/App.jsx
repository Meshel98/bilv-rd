import styles from "./style";
import { Billing,  Footer, Navbar, Hero } from "./components";
import Priser from "./components/priser";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="pb-20">
        <Navbar />
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>


        <Billing />
        <Priser/>

        <Footer />
      </div>
    </div>
  </div>
);

export default App;
