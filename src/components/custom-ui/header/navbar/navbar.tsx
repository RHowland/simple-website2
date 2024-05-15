import { NavigationMenuLinks } from "./navigation/navigation";
import { NavbarLogo } from "./logo/logo";
import { Cta } from "./cta/cta";

export const Navbar = () => {
  return (
    <>
      {/* Section 1: Navigation bar container */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          {/* Section 2: Navigation bar content */}
          <div className="flex justify-between items-center py-4">
            {/* Section 3: Logo and navigation links */}
            <div className="flex items-center">
              <NavbarLogo />
              <ul className="flex space-x-4 ml-8">
                <NavigationMenuLinks />
              </ul>
            </div>
            {/* Section 4: Call-to-action */}
            <div className="flex space-x-2 flex items-center">
              <Cta />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : navbar.tsx
 * Component Name : Navbar
 * Component Type : Navigation Component
 * Dev Initials : Aniket Raj
 * Date Created : 2024-04-04
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to provide a consistent and reusable
 * navigation bar across the website. It includes the logo, navigation
 * links, and a call-to-action section, making it easy for users to navigate
 * through the website and access important features.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The Navbar component renders a navigation bar at the top of the
 * website. It includes the NavbarLogo component for displaying the website
 * logo, the NavigationMenuLinks component for rendering the navigation
 * links, and the Cta component for displaying a call-to-action section. The
 * component uses Tailwind CSS classes for styling and layout.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Navigation bar container
 * This section represents the main container of the navigation bar. It uses
 * the <nav> tag and applies a white background color and a shadow effect
 * using Tailwind CSS classes.
 *
 * Section 2: Navigation bar content
 * This section contains the content of the navigation bar. It uses a <div>
 * tag with flexbox classes to align the logo, navigation links, and
 * call-to-action sections horizontally. The "justify-between" class evenly
 * distributes the space between these sections.
 *
 * Section 3: Logo and navigation links
 * This section contains the NavbarLogo component for displaying the website
 * logo and the NavigationMenuLinks component for rendering the navigation
 * links. The logo and links are aligned horizontally using flexbox classes.
 *
 * Section 4: Call-to-action
 * This section contains the Cta component for displaying a call-to-action
 * section. It is aligned horizontally with the logo and navigation links
 * using flexbox classes.
 *
 * ------------------------------
 * Input Comments:
 * The Navbar component does not receive any input props.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs a navigation bar with the website logo, navigation
 * links, and a call-to-action section. The navigation bar is styled using
 * Tailwind CSS classes for a consistent and visually appealing appearance.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows common patterns for
 * creating a navigation bar using React components and Tailwind CSS. The
 * component imports and utilizes separate components for the logo,
 * navigation links, and call-to-action section, promoting code modularity
 * and reusability.
 *
 */
