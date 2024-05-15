"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuLinks() {
  return (
    <NavigationMenu>
      {/* Section 1: Navigation menu list */}
      <NavigationMenuList>
        {/* Section 2: Getting started navigation item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.ChevronDownIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Section 3: Components navigation item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Section 4: Documentation navigation item */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      {/* Section 5: List item link */}
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

/**
 * ---------------------------------------------------------------------
 * File Name : navigation.tsx
 * Component Name : NavigationMenuLinks
 * Component Type : Navigation Component
 * Dev Initials : Aniket Raj
 * Date Created : 2024-04-04
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to provide a navigation menu with
 * dropdown menus and links to various sections of the website. It allows
 * users to easily navigate through the website and access different pages
 * or components.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The NavigationMenuLinks component renders a navigation menu using
 * the NavigationMenu and related components from the
 * @/components/ui/navigation-menu module. It displays dropdown menus for
 * "Getting started" and "Components", as well as a direct link to the
 * documentation page. The dropdown menus contain lists of links to various
 * sections or components.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Navigation menu list
 * This section represents the main list of navigation items within the
 * NavigationMenu component. It contains NavigationMenuItem components for
 * different sections of the navigation menu.
 *
 * Section 2: Getting started navigation item
 * This section represents the "Getting started" navigation item, which has
 * a dropdown menu triggered by the NavigationMenuTrigger component. The
 * dropdown menu content is defined within the NavigationMenuContent
 * component.
 *
 * Section 3: Components navigation item
 * This section represents the "Components" navigation item, which also has
 * a dropdown menu triggered by the NavigationMenuTrigger component. The
 * dropdown menu content displays a grid of links based on the components
 * array.
 *
 * Section 4: Documentation navigation item
 * This section represents the "Documentation" navigation item, which is a
 * direct link to the documentation page. It uses the Link component from
 * Next.js and applies the navigationMenuTriggerStyle class to the
 * NavigationMenuLink component.
 *
 * Section 5: List item link
 * This section represents an individual list item within the dropdown
 * menus. It uses the NavigationMenuLink component as a child of an anchor
 * tag. The list item displays a title and optional children, and applies
 * conditional classes using the cn function for hover and focus states.
 *
 * ------------------------------
 * Input Comments:
 * The NavigationMenuLinks component does not receive any input props.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs a navigation menu with dropdown menus and links to
 * various sections of the website. The dropdown menus are triggered by
 * hover or click interactions, and the links navigate to the corresponding
 * pages.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows common patterns and
 * utilizes existing UI components and utility functions. The use of React's
 * forwardRef for the ListItem component is a standard technique for
 * creating reusable components that can receive and pass along React props.
 *
 */
