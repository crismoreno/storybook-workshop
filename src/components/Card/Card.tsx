import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import '../../styles';
import { colorsLib, fontsLib } from '../../styles';

export type CardProps = {
  image: string;
  onClick?: () => void;
  title: ReactNode | string;
  subtitle?: string;
  makeHoverEffect?: boolean | false;
};

type StyledCardProps = {
  $hasOnClick?: boolean;
  $isTitleString?: boolean;
  $makeHoverEffect?: boolean;
};

const Card = ({
  image,
  onClick,
  title,
  subtitle,
  makeHoverEffect,
}: CardProps): JSX.Element => {
  const isTitleString = typeof title === 'string';
  const mustTitleBeTruncated = subtitle && isTitleString && title.length >= 30;

  return (
    <StyledCard
      onClick={onClick}
      $hasOnClick={Boolean(onClick)}
      $isTitleString={isTitleString}
      $makeHoverEffect={makeHoverEffect}
    >
      <div className="card-content flex flex-col">
        <div className="img-container">
          <img className="project-image" src={image} />
        </div>
        <div className="project-details flex flex-col justify-center p-3">
          <span className="title" aria-label="title">
            {mustTitleBeTruncated ? title.substring(0, 30) + '\u2026' : title}
          </span>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div<StyledCardProps>`
  box-shadow:
    0 15px 35px rgba(50, 50, 93, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  height: fit-content;
  border: none;
  width: 265px;

  .img-container {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    overflow: hidden;
    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      transition: transform 1s ease;
    }
  }

  &:hover {
    .img-container {
      ${({ $makeHoverEffect }) =>
        $makeHoverEffect &&
        ` border-top-left-radius: 5px;
					border-top-right-radius: 5px;
				`}

      img {
        ${({ $makeHoverEffect }) =>
          $makeHoverEffect &&
          `	border-top-left-radius: 5px;
						border-top-right-radius: 5px;
        transform: scale(1.1);`}
      }
    }
  }

  .project-details {
    font-size: 13px;
    color: ${colorsLib.dark};
    font-family: ${fontsLib.sourceSansPro};
    .title {
      ${({ $isTitleString }) => $isTitleString && `text-transform: uppercase `}
    }
    .subtitle {
      text-transform: none;
    }
  }
  ${({ $hasOnClick }) => $hasOnClick && `cursor: pointer`}
`;

export default Card;
