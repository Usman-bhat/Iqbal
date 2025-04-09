import { useTheme } from '../app/ThemeProvider';

export function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-[rgb(var(--color-primary))] py-8">
      <div className="container-custom">
        <div className="border-t border-[rgb(var(--color-secondary))] pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--color-text))]">
                About
              </h3>
              <p className="text-[rgb(var(--color-text))] opacity-80">
                Dedicated to preserving and sharing the legacy of Allama Iqbal.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--color-text))]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/About" className="text-[rgb(var(--color-text))] opacity-80 hover:opacity-100">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="text-[rgb(var(--color-text))] opacity-80 hover:opacity-100">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--color-text))]">
                Follow Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://youtube.com/@QuranicHub" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--color-text))] opacity-80 hover:opacity-100"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[rgb(var(--color-secondary))] text-center">
            <p className="text-[rgb(var(--color-text))] opacity-80">
              © {new Date().getFullYear()} Made with ♥️ By
              <a
                href="https://usman-bhat.github.io/home"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[rgb(var(--color-accent))] hover:underline"
              >
                Mohammad Usman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}