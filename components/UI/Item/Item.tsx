import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IItemProps, IItemWrapperProps } from './interface';
import { useAppSelector } from '../../../hooks/redux';

const background = (props: IItemWrapperProps) =>
  css`
    background: url('/assets/img/theme/${props.theme}/item-icon-${props.iconStyle}.svg')
      center / contain no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 56px;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #242546;
  `;

const Wrapper = styled.div`
  ${background}
`;

const Item: React.FC<IItemProps> = ({ value, iconStyle }) => {
  const theme = useAppSelector((state) => state.game.theme);

  return (
    <Wrapper theme={theme} iconStyle={iconStyle}>
      {value}
    </Wrapper>
  );
};

export default Item;
