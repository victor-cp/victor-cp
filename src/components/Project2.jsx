import { project2, github } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Project2 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        CRUD Firebase <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A single page Todo App. This was implemented with react, redux, router
        techs and bootstrap's library.
      </p>

      <div
        className={`${styles.paragraph}  flex flex-row flex-wrap sm:mt-3 mt-6`}
      >
        <h2>Express - Storage - EJS - Node-JS - Bootstrap</h2>
      </div>
      <div
        className={`${styles.paragraph}  flex flex-row flex-wrap sm:mt-1 mt-6`}
      >
        <h2>Firebase-admin</h2>
      </div>

      <div className="sm:mt-2 flex flex-row align-items-rigth ">
        <a
          href="https://github.com/victor-cp/firebase-schedule"
          target="_blank"
          className="mr-5 github"
        >
          <img src={github} className="w-10 relative z-[5]" />
        </a>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={project2} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Project2;
