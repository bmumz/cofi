import { useState } from "react";
import { Settings as SettingsIcon } from "react-feather";

import styles from "../../styles/settings.module.css";
import Drawer from "./Drawer";

const SettingsMenu = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false);

  function handleToggleSettingsDrawer() {
    setIsMenuDrawerOpen(!isMenuDrawerOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <button className={styles.button} onClick={handleToggleSettingsDrawer}>
          <SettingsIcon className={styles.icon} />
        </button>

        <Drawer visible={isMenuDrawerOpen} />
      </div>
    </div>
  );
};
export default SettingsMenu;
