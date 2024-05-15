import { Icons } from "@/components/icons/icons";

export const FooterSocial = () => {
  return (
    <>
      {/* Section 1: Social media links */}
      <div className="flex space-x-4 justify-center md:justify-end py-4 md:py-0">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Icons.Github className="h-5 w-5 text-gray-600 hover:text-blue-500" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.Instagram className="h-5 w-5 text-gray-600 hover:text-blue-600" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.Twitter className="h-5 w-5 text-gray-600 hover:text-pink-500" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.LinkedIn className="h-5 w-5 text-gray-600 hover:text-pink-500" />
        </a>
      </div>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : footer-social.tsx
 * Component Name : FooterSocial
 * Component Type : Social Media Component
 * Date Created : 2024-04-04
 * Dev Initials : Aniket Raj
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to display social media links in the footer section of the website. It allows users to easily access and follow the website's social media profiles.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The FooterSocial component renders a set of social media links in the footer section of the website. It imports the Icons component from the "@/components/icons/icons" directory and uses it to display the respective social media icons. The component applies styling classes using Tailwind CSS to ensure a consistent and visually appealing appearance.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Social media links
 * This section contains a set of anchor tags (<a>) representing the social media links. Each link is associated with a specific social media platform (Twitter, Facebook, Instagram, LinkedIn) and opens in a new tab when clicked. The Icons component is used to display the corresponding social media icons, and Tailwind CSS classes are applied to style the icons and their hover states.
 *
 * ------------------------------
 * Input Comments:
 * This component does not receive any input props or parameters.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs a set of social media links in the footer section of the website. The links are displayed as clickable icons representing the respective social media platforms. When clicked, the links open the corresponding social media profiles in a new tab.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows a standard pattern for rendering social media links using anchor tags and icon components. The use of the Icons component from the "@/components/icons/icons" directory suggests a modular and reusable approach to handling icons in the project.
 *
 */
