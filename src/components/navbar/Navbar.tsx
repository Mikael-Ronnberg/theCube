import { useNavStore } from "../../stores/navStore";
import { Logo } from "../logo/Logo";
import { NavbarContainer } from "./navbarStyles";

export const Navbar = () => {
  const setActiveSideIndex = useNavStore((state) => state.setActiveSideIndex);

  return (
    <NavbarContainer>
      <span onClick={() => setActiveSideIndex(0)}>
        <Logo />
      </span>
      <span onClick={() => setActiveSideIndex(1)}>About</span>
      <span onClick={() => setActiveSideIndex(2)}>Work</span>
      <span onClick={() => setActiveSideIndex(3)}>Contact</span>
    </NavbarContainer>
  );
};
