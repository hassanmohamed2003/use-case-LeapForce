import styles from "./page.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.ctaSection}>
        <div className={styles.headerContainer}>
          <div className={styles.labelSubtitle}>
            <span className={styles.labelText}>Label</span>
            <h1>
              Mandatory title about the <br />
              <span className={styles.ctaText}>call-to-action</span> here
            </h1>
          </div>
          <p>Optional body copy goes here.</p>
          <button className={styles.primaryButton}>
            Optional button
            <FontAwesomeIcon
              className={styles.buttonIcon}
              icon={faArrowRight}
            />
          </button>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageCard}>
            <Image
              src="/images/template-image-cta.png"
              alt="Smiling couple embracing in modern kitchen"
              width="644"
              height="515"
            />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <div>
                  <h1>Title</h1>
                  <p>Supporting text about the call-to-action goes here</p>
                </div>

                <button className={styles.overlayButton}>
                  <FontAwesomeIcon
                    className={styles.buttonIcon}
                    icon={faArrowRight}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.imageCard}>
            <Image
              src="/images/template-image-cta.png"
              alt="Smiling couple embracing in modern kitchen"
              width="644"
              height="515"
            />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <div>
                  <h1>Title</h1>
                  <p>Supporting text about the call-to-action goes here</p>
                </div>

                <button className={styles.overlayButton}>
                  <FontAwesomeIcon
                    className={styles.buttonIcon}
                    icon={faArrowRight}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
