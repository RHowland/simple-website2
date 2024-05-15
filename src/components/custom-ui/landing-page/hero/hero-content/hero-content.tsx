import { Button } from "@/components/ui/button";

export const HeroContent = () => {
  return (
    <>
      <div>
        {/* Section 1: Hero heading */}
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-left">
          Discover the Power of Our Services
        </h1>
        {/* Section 2: Hero description */}
        <p className="text-md lg:text-lg md:text-lg text-gray-600 mb-8 text-left">
          Transform your business with our innovative solutions.
        </p>
        {/* Section 3: Hero buttons */}
        <div className="flex space-x-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : hero-content.tsx
 * Component Name : HeroContent
 * Component Type : Content Component
 * Dev Initials : Aniket Raj
 * Date Created : 2024-04-04
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to display the main content of the
 * hero section on the website. It includes a heading, description, and call-
 * to-action buttons to engage users and encourage them to explore the
 * website's services or take a desired action.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The HeroContent component renders the main content of the hero
 * section. It displays a prominent heading to grab the user's attention, a
 * brief description of the services offered, and two call-to-action buttons
 * for users to get started or learn more. The component uses Tailwind CSS
 * classes for styling and layout.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Hero heading
 * This section contains the main heading of the hero section. It uses an
 * <h1> tag and applies responsive font sizes and a bold font weight using
 * Tailwind CSS classes. The heading is left-aligned and has a bottom margin
 * for spacing.
 *
 * Section 2: Hero description
 * This section contains a brief description of the services offered. It
 * uses a <p> tag and applies responsive font sizes and a gray text color
 * using Tailwind CSS classes. The description is left-aligned and has a
 * bottom margin for spacing.
 *
 * Section 3: Hero buttons
 * This section contains two call-to-action buttons. It uses the Button
 * component from the "@/components/ui/button" module and applies a large
 * size and horizontal spacing between the buttons using Tailwind CSS
 * classes. The first button has a default style, while the second button
 * has an outline variant.
 *
 * ------------------------------
 * Input Comments:
 * The HeroContent component does not receive any input props.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs the main content of the hero section, including a
 * heading, description, and call-to-action buttons. The content is styled
 * using Tailwind CSS classes for a visually appealing and responsive
 * layout.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows common patterns for
 * creating a hero section using React and Tailwind CSS. The component
 * imports and utilizes the Button component from a separate module for
 * the call-to-action buttons, promoting code modularity and reusability.
 *
 */
