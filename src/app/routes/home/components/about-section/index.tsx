import classes from "../../home.module.css";

import { Button } from "@components/index";

import aboutImg from "@images/about-workplace.webp";

export const AboutSection = () => {
  return (
    <div className={classes["about-container"]}>
      <div className={classes["about-wrapper"]}>
        <div className={classes["about-img-wrapper"]}>
          <img
            className={classes["about-img"]}
            src={aboutImg}
            alt="workplace"
          />
        </div>
        <div className={classes["about-info-wrapper"]}>
          <h1 className={classes["about-main-headline"]}>
            Powering Your Digital World
          </h1>
          <h2 className={classes["about-subheadline"]}>
            Premium tech, zero compromise.
          </h2>
          <p className={classes["about-text"]}>
            At TechStore, we believe technology should empower, connect, and
            inspire. Whether you're upgrading your daily workflow with a
            high-performance laptop, staying ahead with the latest smartphone
            innovation, or losing yourself in crystal-clear audio with our
            premium headphones, we curate only the best for tech enthusiasts and
            everyday users alike.
          </p>
          <Button classesToAppend={["secondary"]}>Start Exploring</Button>
        </div>
      </div>
    </div>
  );
};
