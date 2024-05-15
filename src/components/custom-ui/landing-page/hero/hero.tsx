import { HeroContent } from "./hero-content/hero-content";
import { HeroMedia } from "./hero-media/hero-media";

export const Hero = () => {
  return (
    <>
      {/* Section 1: Hero section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          {/* Section 2: Hero content and media */}
          <div className="flex flex-col md:flex-row">
            {/* Section 3: Hero content */}
            <div className="lg:w-1/2 flex items-center">
              <HeroContent />
            </div>
            {/* Section 4: Hero media */}
            <div className="lg:w-1/2 py-8 md:py-0">
              <HeroMedia />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : hero.tsx
 * Component Name : Hero
 * Component Type : Layout Component
 * Dev Initials : Aniket Raj
 * Date Created : 2024-04-04
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to serve as the main hero section of
 * the website. It combines the HeroContent and HeroMedia components to
 * create a visually appealing and engaging section that showcases the key
 * message and visuals of the website.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The Hero component renders the hero section of the website. It
 * consists of two main parts: the HeroContent component, which displays the
 * main heading, description, and call-to-action (CTA) buttons, and the HeroMedia
 * component, which displays a visually appealing image. The component uses
 * Tailwind CSS classes for styling and layout, ensuring a responsive and
 * visually appealing display across different screen sizes.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Hero section
 * This section represents the main container of the hero section. It uses a
 * <section> tag and applies a white background color using Tailwind CSS
 * classes.
 *
 * Section 2: Hero content and media
 * This section contains the hero content and media components. It uses a
 * <div> tag with flexbox classes to arrange the content and media side by
 * side on larger screens (md:flex-row) and stack them vertically on smaller
 * screens (flex-col). The container has responsive padding using Tailwind
 * CSS classes.
 *
 * Section 3: Hero content
 * This section contains the HeroContent component, which displays the main
 * heading, description, and call-to-action buttons. It uses a <div> tag
 * with a width of 50% on larger screens (lg:w-1/2) and flexbox classes to
 * vertically center the content.
 *
 * Section 4: Hero media
 * This section contains the HeroMedia component, which displays a visually
 * appealing image. It uses a <div> tag with a width of 50% on larger
 * screens (lg:w-1/2) and responsive padding using Tailwind CSS classes.
 *
 * ------------------------------
 * Input Comments:
 * The Hero component does not receive any input props.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs the hero section of the website, consisting of the
 * HeroContent and HeroMedia components. The section is styled using
 * Tailwind CSS classes for a responsive and visually appealing layout
 * across different screen sizes.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows common patterns for
 * creating a hero section using React components and Tailwind CSS. The
 * component imports and utilizes separate components for the hero content
 * and media, promoting code modularity and reusability.
 *
 */
