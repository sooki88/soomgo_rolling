import LOGO_IMG from "../../assets/logo.svg";
import styles from "./NavigationBar.module.scss";

export const NavigationBar = ({ recipientId = SAMPLE }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logobutton}></div>
    </div>
  );
};
