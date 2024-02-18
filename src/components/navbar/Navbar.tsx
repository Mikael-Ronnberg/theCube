import useNavStore from "../../stores/navStore";

export const Navbar = () => {
  const setActiveSideIndex = useNavStore((state) => state.setActiveSideIndex);

  return (
    <nav
      style={{
        width: "100vw",
        height: "15vh",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <button onClick={() => setActiveSideIndex(0)}>Side 1</button>
      <button onClick={() => setActiveSideIndex(1)}>Side 2</button>
      <button onClick={() => setActiveSideIndex(2)}>Side 3</button>
      <button onClick={() => setActiveSideIndex(3)}>Side 4</button>
    </nav>
  );
};
