
import { ModeToggle } from "../dark-light-mode/toggle-button";
import { NavigationMenuComponent } from "./navigation-menu";


export default async function Navbar() {
  return (
    <div className="isolate bg-background w-full">
      <div className="max-w-[1300px] mx-auto flex items-center h-nav lg:justify-center px-4 md:px-6 lg:px-8">
        <div className="hidden lg:flex lg:flex-1 items-center justify-center">
          <NavigationMenuComponent />
        </div>
        <div className="justify-self-end lg:block hidden">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
