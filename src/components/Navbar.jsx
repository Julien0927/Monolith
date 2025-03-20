import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// Définition des liens de navigation avec des routes
const navLinks = [
  { to: "/AboutUs", label: "ABOUT  US" },
  { to: "/prestations", label: "PRESTATIONS" },
  { to: "/InfosPratiques", label: "INFOS PRATIQUES" },
  { to: "/Medias", label: "MÉDIAS" },
  { to: "/Resultats", label: "RÉSULTATS" },
  { to: "/Benevoles", label: "BÉNÉVOLES" },
  { to: "/Partenaires", label: "PARTENAIRES" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center p-4 justify-between relative"
      style={{ backgroundColor: "var(--primary-color)" }}>
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-montserrat-bold text-xl">
          Club
        </Link>
      </div>

      {/* Bouton menu burger pour mobile */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path fill="white" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Navigation Desktop */}
      <div className="hidden lg:flex lg:items-center lg:w-auto">
        <div className="flex items-center text-sm">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "mr-4 text-black" : "mr-4 text-white"
            }
          >
            <img src="/src/assets/icones/accueil.png" alt="accueil" />
          </NavLink>
          
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) => 
                isActive 
                  ? "text-blackunderline font-bold mr-4" 
                  : "text-white hover:scale-110 font-bold mr-4"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Navigation Mobile (menu burger) */}
      {isOpen && (
        <div className="absolute right-0 top-16 p-4 rounded-lg shadow-lg flex flex-col items-end lg:hidden z-50"
          style={{ backgroundColor: "var(--primary-color)" }}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "mb-4 text-yellow-300" : "mb-4 text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            <img src="/src/assets/icones/accueil.png" alt="accueil" />
          </NavLink>
          
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) => 
                isActive 
                  ? "text-yellow-300 underline font-bold mb-2" 
                  : "text-white hover:underline font-bold mb-2"
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}