import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import '../../styles';
import { PrimaryButtonStyles, SecondaryButtonStyles } from './buttonStyles';
import { fontsLib } from '../../styles';

type ButtonTypes = 'primary' | 'secondary';

export type ButtonProps = {
  children: ReactNode;
  rounded?: boolean;
  buttonType?: ButtonTypes;
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  isUppercase?: boolean;
};

type StyledButtonProps = {
  $rounded?: boolean;
  $buttonType?: ButtonTypes;
  $disabled?: boolean;
  $isUppercase?: boolean;
};

const renderChildrenWithIcon = (
  children: ReactNode,
  icon: ReactNode
): JSX.Element => (
  <span className="inline-flex items-center">
    {children}
    <span className="ml-2 w-5">{icon}</span>
  </span>
);

const getStyleBasedOnType = (customType: ButtonTypes | undefined) => {
  if (customType === 'secondary') return SecondaryButtonStyles;
  return PrimaryButtonStyles;
};

const Button = ({
  children,
  icon,
  rounded,
  buttonType,
  disabled,
  onClick,
  isUppercase,
}: ButtonProps): JSX.Element => (
  <StyledButton
    onClick={onClick}
    $rounded={rounded}
    $disabled={disabled}
    $buttonType={buttonType}
    $isUppercase={isUppercase}
    disabled={disabled}
  >
    {icon ? renderChildrenWithIcon(children, icon) : children}
  </StyledButton>
);

const StyledButton = styled.button<StyledButtonProps>`
  font-family: ${fontsLib.sourceSansPro};
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 5px 10px;

  ${({ $buttonType }) => getStyleBasedOnType($buttonType)}
  ${({ $rounded }) =>
    $rounded &&
    `
			border-radius: 30px;
		`}
  ${({ $disabled }) =>
    $disabled &&
    `
		pointer-events: all !important;
			cursor: not-allowed;
			opacity: 0.3;
		`}
  ${({ $isUppercase }) =>
    $isUppercase &&
    `
		text-transform: uppercase;
		`}
`;

export default Button;
