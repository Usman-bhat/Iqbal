import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from '@/app/ThemeProvider';  // Adjust the path accordingly

const NAV_MENU = ["Home", "About", "Contact","privacyPolicy"];

function NavItem({ children }: { children: React.ReactNode }) {
const { darkTheme } = useTheme();
  return (
    <li>
      <Typography
        as="a"
        href={`/${children}`}
        variant="paragraph"
        color={`${darkTheme ? 'white' : 'black'}`}
        className={`flex items-center gap-2 font-medium text-gray-900 ${darkTheme ? 'text-white' : 'text-gray-800'}`}
      >
        {children}
      </Typography>
    </li>
  );
}


export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { darkTheme, sepiaTheme, toggleTheme } = useTheme();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color={`${darkTheme ? 'black' : sepiaTheme ? 'sepia' : 'white'}`}
      className={`sticky top-0 z-50 border-0 ${
        darkTheme ? 'bg-gray-800' : sepiaTheme ? 'bg-[#f4ecd8]' : 'bg-gray-200'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          target="_blank"
          color={`${darkTheme ? 'white' : sepiaTheme ? 'brown' : 'blue-gray'}`}
          className="text-lg font-bold"
        >
          IQBAL
        </Typography>
        

	<ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((nav) => (
            <NavItem key={nav}>{nav}</NavItem>
          ))}

        </ul>
        <div className="hidden items-center gap-2 lg:flex">
    
          <a href="https://youtube.com/quranichub" target="_blank">
            <Button color="gray">youtube</Button>
          </a>
        </div>
	{/* Theme toggle button */}
          <IconButton                                                                                                 variant="text"                                                                                            color="blue-gray"                                                                                         onClick={toggleTheme}                                                                                     className="focus:outline-none m-3"
            >
            {darkTheme ? (                                                                                              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </IconButton>                                                                                             {/* Your existing buttons */}

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((nav) => (
              <NavItem key={nav}>{nav}</NavItem>
            ))}
	   {/* Theme toggle button */}
          <IconButton
            variant="text"
            color="gray"
            onClick={toggleTheme}                                                                                     className="focus:outline-none"
          >
            {darkTheme ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </IconButton>
          {/* Your existing buttons */}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="https://youtube.com/quranichub" target="_blank">
              <Button color="gray">Youtube</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
