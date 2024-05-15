import { FooterLogo } from "./logo/footer-logo";
import { FooterNavigations } from "./navigation/footer-navigations";
import { FooterSocial } from "./social/footer-social";

export const Footer = () => {
  return (
    <>
      {/* Section 1: Footer container */}
      <footer className="bg-gray-100 py-6 border-t-2 border-green-500">
        <div className="container mx-auto px-4">
          {/* Section 2: Footer content */}
          <div className="flex flex-col md:flex-row justify-between">
            {/* Section 3: Footer logo component */}
            <FooterLogo></FooterLogo>
            {/* Section 4: Footer navigation component */}
            <FooterNavigations></FooterNavigations>
            {/* Section 5: Footer social media component */}
            <FooterSocial></FooterSocial>
          </div>
        </div>
      </footer>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : footer.tsx
 * Component Name : Footer
 * Component Type : Layout Component
 * Date Created : 2024-04-04
 * Dev Initials : Aniket Raj
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to serve as the main container for the footer section of the website. It combines and organizes the various footer components, such as the logo, navigation links, and social media links, into a cohesive and structured layout.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The Footer component renders the footer section of the website. It imports and utilizes the FooterLogo, FooterNavigations, and FooterSocial components to display the respective footer elements. The component applies styling classes using Tailwind CSS to ensure a consistent and visually appealing appearance.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Footer container
 * This section represents the main container of the footer. It is a <footer> element styled with a background color, padding, and a top border using Tailwind CSS classes. The container is centered horizontally using the "mx-auto" class and has horizontal padding applied using the "px-4" class.
 *
 * Section 2: Footer content
 * This section contains the main content of the footer. It is a <div> element that uses flexbox to arrange the footer components (logo, navigation links, and social media links) horizontally on larger screens (md:flex-row) and vertically on smaller screens (flex-col). The "justify-between" class is used to evenly distribute the space between the components.
 *
 * Section 3: Footer logo component
 * This section renders the FooterLogo component, which is responsible for displaying the website's logo in the footer. The FooterLogo component is imported from the "./logo/footer-logo" module and is used here for reusability and modularity.
 *
 * Section 4: Footer navigation component
 * This section renders the FooterNavigations component, which contains the navigation links for the footer. The FooterNavigations component is imported from the "./navigation/footer-navigations" module and is used here to provide a consistent and reusable navigation menu in the footer.
 *
 * Section 5: Footer social media component
 * This section renders the FooterSocial component, which displays the social media links in the footer. The FooterSocial component is imported from the "./social/footer-social" module and is used here to provide a consistent and reusable set of social media links in the footer.
 *
 * ------------------------------
 * Input Comments:
 * This component does not receive any input props or parameters.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs the footer section of the website, consisting of the logo, navigation links, and social media links. The footer is styled using Tailwind CSS classes to provide a consistent and visually appealing appearance.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows a standard pattern for structuring and organizing the footer section of a website. It imports and utilizes separate components for the logo, navigation links, and social media links, promoting code modularity and reusability.
 *
 */
