import { InputHTMLAttributes } from "react";
import { Margin } from "../layouts";
import { StyledRectCheckBox } from "./CheckBox.styled";

export function CheckBox(
  props: InputHTMLAttributes<HTMLInputElement> & Margin,
) {
  const { name, className } = props;
  return (
    <StyledRectCheckBox className={className}>
      <input id={name} type="checkbox" {...props} />
      <label htmlFor={name} />
      <label className="display-label" htmlFor={name}>
        {name}
      </label>
    </StyledRectCheckBox>
  );
}
