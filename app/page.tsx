// app/page.tsx
import Image from "next/image";
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* First Section - Arbiter */}
      <section className={styles["section"]}>
      <div>
        <div className={styles["background-image"]}>
          <Image
            src="/images/uni_1.jpg"
            alt="background image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
        <div className={styles["header-container"]}>
          <Image
            src="/images/app_logo-removebg-preview.png"
            alt="logo"
            width={150}
            height={150}
          />
          <p className={styles["logo-text"]}>Arbiter</p>
        </div>
        <div className={styles["description-container"]}>
          <p style={{ padding: "30px" }} className={styles["description-text"]}>
            Your helpful AR Assistant
          </p>
        </div>
        <div className={styles["arrow-container"]}>
          <span className={styles.arrow}>↓</span>
        </div>
      </section>

      {/* Second Section - Geolocation */}
      <section className={styles["section"]}>
      <div>
        <div className={styles["background-image"]}>
          <Image
            src="/images/uni_2.jpg"
            alt="background image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
        <div className={styles["description-container"]}>
          <p className={styles["description-text"]}>What can it do?</p>
          <p className={styles["description-text"]}>Some description</p>
        </div>
        <div className={styles["button-container"]}>
          <Link href='/content/geo.html'>
            {/* <div className={styles["start-button"]}>
              Let start
            </div> */}
          </Link>
        </div>
        <div className={styles["arrow-container"]}>
          <span className={styles.arrow}>↓</span>
        </div>
      </section>

      {/* Third Section - Markers */}
      <section className={styles["section"]}>
      <div>
        <div className={styles["background-image"]}>
          <Image
            src="/images/students.jpg"
            alt="background image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
        <div className={styles["description-container"]}>
          <p className={styles["description-text"]}>What was the purpose of Arbiter?</p>
          <p className={styles["description-text"]}>Some description</p>
        </div>
        <div className={styles["button-container"]}>
          <Link href='/content/marker.html'>
            <div className={styles["start-button"]}>
              Let start
            </div>
          </Link>
        </div>
      </section>
    {/* About Section */}
    <div className={styles["about-section"]}>
      <h2>About Us</h2>
      <p>
        We are the team behind Arbiter, working to bring you an intuitive and powerful solution for your needs. Our goal is to make your experience seamless and enjoyable.
      </p>
      <div className={styles["about-container"]}>
        <div className={styles["about-item"]}>
          <h4>Nikita Markov</h4>
          <p>Team Lead</p>
        </div>
        <div className={styles["about-item"]}>
          <h4>Maxim Zharkov</h4>
          <p>UI/UX Designer</p>
        </div>
        <div className={styles["about-item"]}>
          <h4>Sergey Parenkov</h4>
          <p>CI/CD Tester</p>
        </div>
      </div>
    </div>
  </div>
  );
}
