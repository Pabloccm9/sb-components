import './mylabel.css';

export interface MyLabelProps {
  /**
   * This is the label of our component
   */
  label?: string;
  /**
   * The size of our component
   */
  size: "normal" | "h1" | "h2" | "h3"; 
  /**
   * The color we want to add to the label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Wheter we want to capitalize text
   */
  allCaps?: boolean;
  /**
   * Custom font color
   */
  fontColor?: string;
}

export const MyLabel = ({ 
    label = 'No label', 
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor}: MyLabelProps ) => {
  return (
    <span 
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }} >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
