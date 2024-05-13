import { HiOutlineMoon } from "react-icons/hi";
import ButtonIcon from "../ui/ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineSun } from "react-icons/hi2";

function DarkModeToggle() {
  // eslint-disable-next-line no-unused-vars
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
