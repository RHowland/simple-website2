import Lo1R2C_d01c01 from "../../Lo1R2C_d01c01/Lo1R2C_d01c01";
import { ILayouts } from "../../layout/grid/interfaces/grid";
import { HeroContent } from "./hero-content/hero-content";
import { HeroMedia } from "./hero-media/hero-media";

export const Hero = () => {
  const layouts: ILayouts = {
    lg: [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: "b",
        x: 1,
        y: 0,
        w: 1,
        h: 1,
      },
    ],
  };
  return (
    <>
      {/* Section 1: Hero section */}
      <section className="bg-white">
        <div className="container mx-auto px-1 py-16 md:py-24">
          {/* Section 2: Using Lo1R2C_d01c01 component projecting Hero content and media */}

          <Lo1R2C_d01c01
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 }}
            rowHeight={500}
          >
            <div key={"a"} className="flex items-center">
              <HeroContent />
            </div>

            <div key={"b"}>
              <HeroMedia />
            </div>
          </Lo1R2C_d01c01>
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
