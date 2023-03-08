import { project1, github, website } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Project0 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Videogames website <br className="sm:block hidden" /> with testing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A full stack CRUD project is carried out using the PERN tech, video game
        themed, consuming the RAWG api. Testing all components frontend, backend
        and DB (65 tests).
      </p>

      <div
        className={`${styles.paragraph}  flex flex-row flex-wrap sm:mt-3 mt-6`}
      >
        <h2>React - Express - CSS-Modules - Postgres - Node-JS</h2>
      </div>
      <div
        className={`${styles.paragraph}  flex flex-row flex-wrap sm:mt-1 mt-6`}
      >
        <h2>Jest - Mocha-chai - RAWG API</h2>
      </div>

      <div className="sm:mt-2 flex flex-row align-items-rigth ">
        <a
          href="https://github.com/victor-cp/Videogames-Website-PERN-CRUD-Testing"
          target="_blank"
          className="mr-5 github"
        >
          <img src={github} className="w-10 relative z-[5]" />
        </a>
        <a
          href="https://videogames-website-pern-crud-testing-ot7p.vercel.app/"
          target="_blank"
          className="github"
        >
          <img src={website} className="w-10 relative z-[5]" />
        </a>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img
        src={project1}
        alt="billing"
        className="w-[100%] h-[auto] relative z-[5]"
      />
    </div>
  </section>
);

export default Project0;
