import Image from "next/image";
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
    return (
        <div>
            <div className={styles["background-image"]}>
                <Image
                    src="/uni_background.jpg"
                    alt="background image"
                    fill  
                    style={{ objectFit: "cover" }}
                />
            </div>

            <main className={styles["main-container"]}>
                <div className={styles["content-container"]}>
                    <div className={styles["header-container"]}>
                        <Image src="/app_logo-removebg-preview.png" alt="logo" width={60} height={60}/>
                        <p className={styles["logo-text"]}>Arbiter</p>
                    </div>
                    <div className={styles["description-container"]}>
                        <div>
                            <p className={styles["description-text"]}>
                                Description
                            </p>
                        </div>
                    </div>
                    <div className={styles["button-container"]}>
                        <Link href='/geo.html'>
                            <div className={styles["start-button"]}>
                                GEO
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
