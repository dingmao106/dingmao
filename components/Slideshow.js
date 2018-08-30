import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import RawIcon from './Icon';

const DotWrap = styled.div`
  text-align: center;
`;

const Dot = styled.div`
  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 3px;
  border-radius: 50%;
  transition: 0.3s;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    background: #3767C7;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  ${props => props.isActive && css`
    background: #3767C7;
  `}
`;

const Icon = styled(RawIcon)`
  position: absolute;
  display: inline-block;
  width: 11px;
  margin: 0 0 15px;
  color: #3767C7;
  transition: 0.3s;
  transform: translateY(-50%);
  top: 50%;
  cursor: pointer;
  z-index: 2;

  ${props => props.w && css`
    width: ${p => p.w};
  `}
`;

const LeftIcon = styled(Icon)`
  left: -200px;
`;

const RightIcon = styled(Icon)`
  right: -200px;
`;

const SlideShowWrap = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    ${LeftIcon} {
      left: 50px;
    }

    ${RightIcon} {
      right: 50px;
    }
  }
`;

const ViewBox = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  text-align: center;
  margin: 0 0 15px;
  font: 1.9230769231em/1 Reenie Beanie, cursive;
`;

const Desc = styled.p`
  text-align: center;
`;

const ItemWrap = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  ${props => !props.isSkip && css`
    transition: .3s;
  `}
  ${props => props.pos && css`
    left: ${`${props.pos}%`}
  `}
`;

class SlideShow extends React.Component {
  constructor(props) {
    super();

    this.state = {
      currentIndex: props.items.length,
      action: '',
      posMap: [
        ...props.items.map((_, idx) => (props.items.length - idx) * -100),
        ...props.items.map((_, idx) => idx * 100),
      ],
      renderItems: [
        ...props.items,
        ...props.items,
      ],
      skipTransitionMap: props.items.map(() => false),
    };
  }

  handleSwitchItem = (action) => {
    const { currentIndex, posMap, renderItems: items } = this.state;
    const nextState = { action };
    const firstItem = 0;
    const lastItem = items.length - 1;
    let next = currentIndex + 1;
    let prev = currentIndex - 1;
    if (action === 'next') {
      if (next === items.length) {
        next = firstItem;
      }
      nextState.posMap = posMap.map((p, cur) => {
        if ((cur === firstItem) && (next === lastItem)) {
          return 100;
        }
        if ((cur === lastItem) && (next === firstItem)) {
          return -100;
        }
        return (cur - next) * 100;
      });
      nextState.currentIndex = next;
    } else if (action === 'prev') {
      if (prev < 0) {
        prev = lastItem;
      }
      nextState.posMap = posMap.map((p, cur) => {
        if ((cur === firstItem) && (prev === lastItem)) {
          return 100;
        }
        if ((cur === lastItem) && (prev === firstItem)) {
          return -100;
        }
        return (cur - prev) * 100;
      });
      nextState.currentIndex = prev;
    }
    this.setState({
      ...nextState,
      skipTransitionMap: posMap.map((pos, idx) => (
        pos !== nextState.posMap[idx] &&
        ((pos < 0 && nextState.posMap[idx] > 0) || (pos > 0 && nextState.posMap[idx] < 0))
      )),
    });
  }

  renderItems = () => {
    const { posMap, skipTransitionMap, renderItems } = this.state;

    return (
      <ViewBox>
        {renderItems.map((item, idx) => (
          <ItemWrap key={idx} pos={posMap[idx]} isSkip={skipTransitionMap[idx]}>
            <Logo>{item.img}</Logo>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
          </ItemWrap>
        ))}
      </ViewBox>
    );
  }

  render() {
    const { items } = this.props;
    const { currentIndex, renderItems } = this.state;
    return (
      <SlideShowWrap>
        <LeftIcon
          name="ArrowLeft"
          w="20px"
          onClick={() => this.handleSwitchItem('prev')}
        />
        {this.renderItems()}
        <RightIcon
          name="ArrowRight"
          w="20px"
          onClick={() => this.handleSwitchItem('next')}
        />
        <DotWrap>
          {items.map(item => (
            <Dot isActive={item.title === renderItems[currentIndex].title} />
          ))}
        </DotWrap>
      </SlideShowWrap>
    );
  }
}

SlideShow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SlideShow;
