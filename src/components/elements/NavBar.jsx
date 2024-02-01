import { useNavRef } from "../../Providers/NavRefsProvider";
import useScrollToSection from "../../Hooks/useScrollToSection";
import { easeInOut, motion } from "framer-motion";

function NavBar() {
  const { caseRef, mainsRef, cpuRef, coolersRef, ramRef, gpuRef, powerRef } =
    useNavRef();
  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      exit={{ x: -250 }}
      transition={{ delay: 0.01, ease: easeInOut, duration: 0.8 }}
      className="border-b-2 bg-white w-full border-gray p-5 sticky top-0"
    >
      <ul className="flex justify-evenly items-center lg:px-20 px-10 gap-5 ">
        <NavItem refrence={caseRef} title={"Case"} />
        <NavItem refrence={mainsRef} title={"Mother Boards"} />
        <NavItem refrence={cpuRef} title={"CPU"} />
        <NavItem refrence={coolersRef} title={"Coolers"} />
        <NavItem refrence={ramRef} title={"Ram"} />
        <NavItem refrence={gpuRef} title={"GPU"} />
        <NavItem refrence={powerRef} title={"PSU"} />
      </ul>
    </motion.nav>
  );
}

export default NavBar;

function NavItem({ refrence, title }) {
  return (
    <li
      onClick={() => {
        useScrollToSection(refrence);
      }}
      className="transition-all 0.3s text-bf text-gray hover:text-primary whitespace-nowrap"
    >
      {title}
    </li>
  );
}
