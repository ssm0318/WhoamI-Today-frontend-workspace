import styled, { css } from "styled-components";
import { DEFAULT_MARGIN } from "../../constants/layout";
import { ColorKeys } from "../colors";
import { FlexRow } from "../layouts";

type StyledButtonProps = {
  outline?: ColorKeys;
  fill?: ColorKeys;
  sizing?: "fit-content" | "stretch";
  width?: number;
};
const Button = styled.div<StyledButtonProps>`
  ${({ theme, fill }) =>
    !!fill &&
    css`
      background-color: ${theme[fill]};
    `}
  ${({ theme, outline }) =>
    !!outline &&
    css`
      border: 1px solid ${theme[outline]};
    `};
  ${({ sizing }) =>
    sizing === "fit-content" &&
    css`
      align-self: flex-start;
    `}
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  word-break: keep-all;
  ${({ width }) => css`
    width: ${width}px;
  `}
`;

/** @deprecated */
export const BUTTON_HEIGHT = {
  LARGE: 60,
  MEDIUM: 37,
  SMALL: 25,
};

/** @deprecated */
export const LargeButton = styled(Button)`
  height: ${BUTTON_HEIGHT.LARGE}px;
  padding: 0 20px;
  border-radius: 12px;
`;

/** @deprecated */
export const MediumButton = styled(Button)`
  height: ${BUTTON_HEIGHT.MEDIUM}px;
  padding: 6px 20px;
  border-radius: 8px;
`;

/** @deprecated */
export const SmallButton = styled(Button)`
  height: ${BUTTON_HEIGHT.SMALL}px;
  padding: 4px 18px;
  border-radius: 12px;
`;

export const RoundButton = styled(Button)`
  padding: 6px 8px;
  border-radius: 12px;
`;

export const UnderlineButton = styled(Button)`
  padding: 8px 12px;
  text-decoration-line: underline;
`;

export const ConfirmButton = styled(Button)`
  padding: 10px 0px;
  border-radius: 5.74px;
`;

export const Container = styled.div<{
  sizing?: "fit-content" | "stretch";
  disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  ${({ sizing = "fit-content" }) =>
    sizing === "stretch" &&
    css`
      width: 100%;
      align-self: stretch;
    `}
  ${({ disabled }) =>
    !disabled
      ? css`
          cursor: pointer;
        `
      : css`
          pointer-events: none;
        `}
`;

export const RowButtonContainer = styled(FlexRow)<{ pl?: number }>`
  width: 100%;

  div {
    flex-grow: 1;
    width: 100%;
  }

  div + div {
    padding-left: ${({ pl }) => pl ?? DEFAULT_MARGIN}px;
  }
`;
