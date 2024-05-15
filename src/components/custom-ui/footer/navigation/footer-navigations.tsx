import Link from "next/link";

export const FooterNavigations = () => {
  return (
    <>
      {/* Section 1: Navigation links */}
      <nav className="mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="/about" className="text-black-600 hover:text-blue-500">
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-black-600 hover:text-blue-500"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black-600 hover:text-blue-500"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black-600 hover:text-blue-500"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black-600 hover:text-blue-500"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : footer-navigations.tsx
 * Component Name : FooterNavigations
 * Component Type : Navigation Component
 * Date Created : 2024-04-04
 * Dev Initials : Aniket Raj
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to provide a reusable navigation menu for the footer section of the website. It allows users to easily access important pages such as About us, Services, Contact Us, FAQs, and Blog.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The FooterNavigations component renders a navigation menu with links to various pages of the website. It uses Next.js's Link component to create clickable links that navigate to the corresponding pages. The component also applies styling classes to the navigation items using Tailwind CSS.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Navigation links
 * This section contains the unordered list (<ul>) with list items (<li>) representing the navigation links. Each list item contains a Link component from Next.js, which is used to create clickable links to the corresponding pages. The links are styled using Tailwind CSS classes to provide a consistent and visually appealing appearance.
 *
 * ------------------------------
 * Input Comments:
 * This component does not receive any input props or parameters.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs a navigation menu with links to the following pages:
 * - About us
 * - Services
 * - Contact Us
 * - FAQs
 * - Blog
 * The links are styled using Tailwind CSS classes to provide a consistent and visually appealing appearance.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows standard practices for creating a navigation menu using Next.js's Link component and Tailwind CSS for styling. There is no unusual or complex code required for this component.
 *
 */
