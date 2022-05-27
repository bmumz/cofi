import { FC } from "react";
import cx from "classnames";

import styles from "../../styles/settings.module.css";
import { DrawerType } from "../../types/components/settings";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Drawer: FC<DrawerType> = ({ visible }) => {
  const { theme } = useTheme();
  return (
    <>
      {visible && (
        <div
          className={cx(styles.drawer, theme === "light" && styles.darkAccents)}
        >
          <h2 className={styles.mediumHeading}>Settings</h2>
          <br />

          <ul className={styles.list}>
            <li>
              <ThemeSwitch />
            </li>
            <li>Item Two</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Drawer;
