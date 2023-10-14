import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import '../../styles';
import { PrimaryButtonStyles, SecondaryButtonStyles } from './buttonStyles';

type ButtonTypes = 'primary' | 'secondary';

export type ButtonProps = {
  children: ReactNode;
  rounded?: boolean;
  buttonType?: ButtonTypes;
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
};

type StyledButtonProps = {
  $rounded?: boolean;
  $buttonType?: ButtonTypes;
  $disabled?: boolean;
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
}: ButtonProps): JSX.Element => (
  <StyledButton
    onClick={onClick}
    $rounded={rounded}
    $disabled={disabled}
    $buttonType={buttonType}
  >
    {icon ? renderChildrenWithIcon(children, icon) : children}
  </StyledButton>
);

const StyledButton = styled.a<StyledButtonProps>`
  font-family: 'Source Sans Pro', sans-serif;
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
`;

export default Button;
