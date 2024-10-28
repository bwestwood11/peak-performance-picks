import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import LogoComponent from "@/icons/logo-icon";

const MobileMenu = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden absolute right-3 top-2 z-20">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-primary">
          <div className="flex flex-col items-start space-y-6 p-6">
            <Link href="#" className="flex items-center">
            <LogoComponent className="p-5" />
              <span className="sr-only">StudyGen AI</span>
            </Link>
            <nav className="grid gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-secondary"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-secondary"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-secondary"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-secondary"
              >
                Contact
              </Link>
            </nav>

            <Link href="/auth/login" className={buttonVariants()}>
              Get Started
            </Link>
          </div>
        </SheetContent>
      </Sheet>
  )
}

export default MobileMenu