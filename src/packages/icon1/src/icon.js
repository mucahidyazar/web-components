import { forwardRef } from "react";
import { cx, __DEV__ } from "@mucahidyazar/util";

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: "0 0 24 24",
};

export const Icon = forwardRef((props, ref) => {
  const {
    as: element,
    viewBox,
    color = "currentColor",
    focusable = false,
    children,
    className,
    __css,
    ...rest
  } = props;

  const _className = cx("chakra-icon", className);

  const styles = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color,
    ...__css,
  };

  const shared = {
    ref,
    focusable,
    className: _className,
    __css: styles,
  };

  const _viewBox = viewBox ?? fallbackIcon.viewBox;

  /**
   * If you're using an icon library like `react-icons`.
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */
  if (element && typeof element !== "string") {
    return <svg as={element} {...shared} {...rest} />;
  }

  const _path = children ?? fallbackIcon.path;

  return (
    <svg verticalAlign="middle" viewBox={_viewBox} {...shared} {...rest}>
      {_path}
    </svg>
  );
});

if (__DEV__) {
  Icon.displayName = "Icon";
}

export default Icon;
