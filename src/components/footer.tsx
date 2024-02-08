import { Typography, Button } from "@material-tailwind/react";
import { useTheme } from '@/app/ThemeProvider';  // Adjust the path accordingly

const LINKS = ["Home", "About"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { darkTheme } = useTheme();

  return (
    <footer className={` px-8 pt-20 ${darkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className={`text-center font-normal ${darkTheme ? 'text-gray-400' : 'text-gray-700'}`}>
            &copy; {CURRENT_YEAR} Made with {"♥️"} By
            <a href="https://usman-bhat.github.io/home" target="_blank" className={darkTheme ? 'text-blue-400' : 'text-blue-700'}>
             Mohammad Usman
            </a>&
            <a href="https://github.com/HASHIM-HAMEEM" target="_blank" className={darkTheme ? 'text-blue-400' : 'text-blue-700'}>
               Hashim Hameem
            </a>
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href={link}
                  variant="small"
                  className={`font-normal ${darkTheme ? 'text-gray-400 hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
