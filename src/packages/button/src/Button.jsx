import PropTypes from "prop-types";
import * as S from "./style";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const kind = primary ? "primary" : "secondary";

  return (
    <S.Button
      type="button"
      kind={kind}
      size={size}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </S.Button>
  );
};

console.log("object");

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

Button.S = S;
