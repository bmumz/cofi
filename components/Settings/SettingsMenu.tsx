import { useState } from "react";
import { Settings as SettingsIcon } from "react-feather";
import cx from "classnames";
import { useTheme } from "next-themes";

import styles from "../../styles/settings.module.css";
import Drawer from "./Drawer";

const SettingsMenu = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  function handleToggleSettingsDrawer() {
    setIsMenuDrawerOpen(!isMenuDrawerOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <button
          className={cx(styles.button, theme === "light" && styles.darkAccents)}
          onClick={handleToggleSettingsDrawer}
        >
          <SettingsIcon className={styles.icon} />
        </button>

        <Drawer visible={isMenuDrawerOpen} />
      </div>
    </div>
  );
};
export default SettingsMenu;
