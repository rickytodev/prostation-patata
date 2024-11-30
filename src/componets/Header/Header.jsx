import NavMenu from "../NavMenu/NavMenu";
import { menuHeader } from "../../data/menuLinksData.js";
const Header = () => {
  return (
    <header className='w-full flex items-center justify-between px-5'>
        <img width={50} src="./img/logo/logo.svg" alt="logo de prostation" />
        <NavMenu mapMenu={menuHeader}/>
    </header>
  )
}

export default Header;
