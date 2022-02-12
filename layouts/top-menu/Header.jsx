import HeaderBurgerMenu from "../../components/header/HeaderBurgerMenu";
import HeaderIcon from "../../components/header/HeaderIcon";
import HeaderNavigation from "../../components/header/HeaderNavigation";
import HeaderSearch from "../../components/header/HeaderSearch";

const Header = () => {
  return (
    <header className="mx-0 bg-black">
      <div className="max-w-[1440px] mx-auto px-[30px] flex h-[110px] items-center justify-between md:justify-center gap-[50px] lg:gap-[100px]">
        <HeaderIcon />
        <div className="hidden md:block">
          <HeaderNavigation />
        </div>
        <div className="block md:hidden ">
          <HeaderBurgerMenu/>
        </div>
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header;
