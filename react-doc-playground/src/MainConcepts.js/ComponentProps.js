import CompPropBtn from "./CompPropBtn";
const ComponentProps = () => {
    // Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.This page provides an introduction to the idea of components
    // Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
    return (
        <div className="flex">
            <CompPropBtn color="green" text="hire me" />
            <CompPropBtn color="blue" text="hit me up" />
            <CompPropBtn color="yellow" text="hire me" />
        </div>
    );
};

export default ComponentProps;
