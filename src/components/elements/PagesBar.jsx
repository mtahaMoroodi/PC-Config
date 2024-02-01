import { NavLink } from "react-router-dom"

function PagesBar() {
  return (
    <nav className="w-full flex justify-end items-center gap-x-4">
        <a className="text-primary" href="/configs">Saved Configs</a>
        <NavLink className="text-primary"to={"/"}>Config New PC</NavLink>
    </nav>
  )
}

export default PagesBar