import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className='border-none outline-none bg-transparent'>
          <AlignRight size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col items-center bg-white/30 dark:bg-neutral-950/30 backdrop-blur-xl  text-black dark:text-white border-none z-[99999999]"
      >
        <SheetHeader>
          <SheetTitle className="mt-12 ">Academy-LMS</SheetTitle>
          <SheetDescription>
            <NavItems isMobile={true} sidebar={true} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
