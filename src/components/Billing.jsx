
import styles, { layout } from "../style";
import { bill } from "../assets";
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>

    <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Din bil i trygga händer, <br className="sm:block hidden" /> vi är experter på bilvård.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      När det gäller bilvård, är erfarenhet och expertis avgörande. Vi på Bilvårdscenter har specialiserat oss på bilvård och erbjuder en service som inte bara rengör din bil, utan även bevarar dess skönhet och värde. Vår expertis spänner över en mängd tjänster, från noggrann handtvätt till avancerade behandlingar som lackskydd och interiörvård. Vi använder endast de bästa produkterna och metoderna för att säkerställa att din bil ser fantastisk ut och skyddas över tid.
      </p>


    </div>
  </section>
);

export default Billing;
