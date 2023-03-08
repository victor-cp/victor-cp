import { apple, bill, google, project0, github, website } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <>
    <hr className="mb-6"></hr>
    <h1 id="projects" className={styles.heading2}>
      Projects
    </h1>
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={project0} className="w-[100%] h-[auto] relative z-[5]" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          GO-JOB <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Una página web escalable (Filtros en el back) capaz de realizar
          publicaciones de servicios, postular a servicios como profesional,
          realizar transacciones (Stripe), guardar imágenes (Cloudinary),
          loggearte (Auth0). Entre los roles puedes ser usuario comun,
          profesional o admin. Mostrando componentes distintos para cada uno.
          Proyecto final SoyHenry. V.Colquichagua - L.Moyano - F.Toledo - M.Baez
          - J.Flores
        </p>

        <div
          className={`${styles.paragraph}  flex flex-row flex-wrap sm:mt-3 mt-6`}
        >
          <h2>PERN Tech - Cloudinary - Stripe - Tailwind - Git</h2>
        </div>
        <div
          className={`${styles.paragraph}  flex flex-row flex-wrap sm:mt-1 mt-6`}
        >
          <h2>Auth0 - jwt - Formik/Yup - Redux - Sequelize</h2>
        </div>
        <div className="sm:mt-2 flex flex-row align-items-rigth ">
          <a
            href="https://github.com/victor-cp/goJob2"
            target="_blank"
            className="mr-5 github"
            // className={`${styles.github} mr-5`}
          >
            <img src={github} className="w-10 relative z-[5]" />
          </a>
          {/* <a
            href="https://videogames-website-pern-crud-testing-ot7p.vercel.app/"
            target="_blank"
            className="github"
          >
            <img src={website} className="w-10 relative z-[5]" />
          </a> */}
        </div>
      </div>
    </section>
  </>
);

export default Billing;
