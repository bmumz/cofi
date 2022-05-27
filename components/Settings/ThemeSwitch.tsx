import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      value={theme}
      onChange={(e) => {
        setTheme(e.target.value);
      }}
    >
      <option value="darkmode">Dark</option>
      <option value="lightmode">Light</option>
    </select>
  );
};

export default ThemeSwitch;
