"use client";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { ILayouts } from "./interfaces/grid";

const ResponsiveGridLayout = WidthProvider(Responsive);

{
  /* Section 1: IGridProps Interface */
}
interface IGridProps {
  layouts: ILayouts;
  breakpoints: { [key: string]: number };
  cols: { [key: string]: number };
  children: React.ReactNode;
  rowHeight: number;
}

{
  /* Section 2: Grid Component */
}
const Grid: React.FC<IGridProps> = ({
  layouts,
  breakpoints,
  cols,
  children,
  rowHeight,
}) => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={breakpoints}
      cols={cols}
      rowHeight={rowHeight}
    >
      {children}
    </ResponsiveGridLayout>
  );
};

export default Grid;

/**
 * ---------------------------------------------------------------------
 * File Name : grid.tsx
 * Component Name : Grid
 * Component Type : Grid Component
 * Dev Initials : Aniket Raj
 * Date Created : 2024-05-08
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to provide a reusable and responsive grid layout
 * for displaying content. It utilizes the react-grid-layout library to create a
 * flexible and customizable grid system that adapts to different screen sizes and
 * breakpoints. The component accepts layouts, breakpoints, column configurations, and
 * children as props, making it highly versatile and suitable for various use cases.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The Grid component renders a responsive grid layout using the react-grid-layout
 * library. It takes in the necessary props such as layouts, breakpoints, column
 * configurations, and children. The component then renders the ResponsiveGridLayout
 * component from the library, passing the provided props and children. This creates a
 * grid structure that automatically adjusts based on the defined breakpoints and column
 * configurations, allowing the content to be displayed in a responsive manner.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: IGridProps Interface
 * This section defines the IGridProps interface, which specifies the props expected by
 * the Grid component. It includes the layouts prop of type ILayouts, breakpoints and
 * cols props as objects with string keys and number values, and the children prop of
 * type React.ReactNode.
 *
 * Section 2: Grid Component
 * This section defines the Grid component as a functional component using the
 * React.FC type and the IGridProps interface. It destructures the props received and
 * renders the ResponsiveGridLayout component from the react-grid-layout library,
 * passing the necessary props and children. The component also sets a fixed row height
 * of 300 pixels.
 *
 * ------------------------------
 * Input Comments:
 * The Grid component expects the following props:
 * - layouts: An object of type ILayouts representing the layout configuration for
 *   different breakpoints.
 * - breakpoints: An object with string keys and number values representing the
 *   breakpoints for different screen sizes.
 * - cols: An object with string keys and number values representing the number of
 *   columns for each breakpoint.
 * - children: The child elements to be rendered within the grid layout.
 *
 * ------------------------------
 * Output Comments:
 * The Grid component renders a responsive grid layout using the ResponsiveGridLayout
 * component from the react-grid-layout library. The grid layout adapts to different
 * screen sizes based on the provided breakpoints and column configurations. The child
 * elements are rendered within the grid cells according to the specified layout.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows a standard pattern for creating a
 * responsive grid layout using the react-grid-layout library. The component utilizes
 * TypeScript for type checking and defines the expected props using an interface. The
 * use of destructuring and the spread operator for passing props helps keep the code
 * concise and readable.
 */
