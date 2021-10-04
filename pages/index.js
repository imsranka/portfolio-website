import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sakshi Ranka</title>
        <meta name="description" content="Sakshi's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home_wrapper}>
        <div className={styles.home_container}>
          <section className={styles.home_title}>
            Hey, I&apos;m Sakshi Ranka
            {/* born on March 1997. */}
            {/* I live in India   */}
            {/* <br /> */}
            {/* Welcome to my page */}
            {/*  */}
          </section>
          <section className={styles.home_subtitle}>
            {`A passionate developer aiming to create elegant UI & effortless UX`}
          </section>
          <br />
          <section className={styles.home_intro}>
            {`I'm based in India, specializing in frontend development & aspiring to be a full stack developer. In my spare time, you can catch me binge watching & reading books.
          I cook some mean dishes from time to time!!
          `}
          </section>
          <section className={styles.home_curr_info}>
            Current Role: Frontend Developer@Sapio Analytics
          </section>
          <p className={styles.social_link}>
            <a
              className={styles.social}
              href="https://www.linkedin.com/in/sakshi-ranka"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className={styles.social}
              href="https://github.com/imsranka"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className={styles.social}
              href="https://gitlab.com/imsranka"
              rel="noopener noreferrer"
              target="_blank"
            >
              Gitlab
            </a>
            <a
              className={styles.social}
              // href="mailto:ranka.sakshi9@gmail.com"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ranka.sakshi9@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email
            </a>
          </p>
          {/* <div>add links to github, gitlab, linkedin</div> */}
        </div>
      </main>
    </>
  );
}
