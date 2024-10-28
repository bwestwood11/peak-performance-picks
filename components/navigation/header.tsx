import LogoComponent from "@/icons/logo-icon";
import MobileMenu from "./mobile-menu";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <div className="w-full bg-primary z-10 sticky top-0">
      <div className="sticky top-0 flex  w-full justify-center items-center">
        <Link href="/">
          <LogoComponent className="py-5" />
        </Link>
      </div>
      <MobileMenu />
    </div>
  );
};

export default HeaderSection;
