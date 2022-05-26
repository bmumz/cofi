import { ComponentPropsWithoutRef, FC } from "react";

import styles from "../../styles/settings.module.css";

interface Props extends ComponentPropsWithoutRef<"div"> {
  visible: boolean;
}

const Drawer: FC<Props> = ({ visible }) => (
  <>
    {visible && (
      <div className={styles.drawer}>
        <h2 className={styles.mediumHeading}>Settings</h2>
        <br />

        <ul className={styles.list}>
          <li>Item One</li>
          <li>Item Two</li>
        </ul>
      </div>
    )}
  </>
);

export default Drawer;
