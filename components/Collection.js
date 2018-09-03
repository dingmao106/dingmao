import React from 'react';
import PropTypes from 'prop-types';
import uniq from 'lodash/uniq';
import styled, { css } from 'styled-components';
import RawCard from './Card';
import PageWrap from './PageWrap';
import RawScrollbar from './Scrollbar';

const Scrollbar = styled(RawScrollbar)`
  top: ${({ top }) => `${top < 0 ? 0 : top}px`};
  height: 100px;
`;

const Card = styled(RawCard)`
  margin-top: 10px;
  height: calc(100% - 30px);
  background: #fff;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 8px;
  transition: height 250ms ease-out 0s;
  overflow: hidden;
  overflow-y: auto;
  transform: translateZ(0);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  position: relative;
`;

const Filter = styled.div`
  line-height: 70px;
  height: 70px;
  padding: 0 20px;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 3px;
  ${props => props.isActive && css`
    color: #3767C7;
  `}
`;

const Item = styled.img`
  float: left;
  width: 0px;
  visibility: hidden;
  opacity: 0;
  transform: translate3d(0px, 0px, 0px) scale3d(0.001, 0.001, 1);
  transition: transform 250ms ease-out 0s, opacity 250ms ease-out 0s;

  ${props => props.isActive && css`
    visibility: visible;
    opacity: 1;
    width: 300px;
    height: 300px;
    object-fit: contain;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
    transition: transform 250ms ease-out 0s, opacity 250ms ease-out 0s;
  `}
`;

function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    let name = item.replace('./', '');
    name = name.replace(/(\.\w+)$/, '');
    images[name] = r(item);
    return images;
  });
  return images;
}

class Collection extends React.Component {
  constructor() {
    super();

    this.filters = [];

    this.scrollArea = React.createRef();
    this.lastItem = React.createRef();
    this.scrollLength = 0;
    this.init = false;

    this.state = {
      filter: 'all',
      allItems: [],
      renderedItems: [],
      scrollTopPos: 0,
    };
  }

  componentDidMount() {
    this.images = importAll(require.context('../static/collections', false, /\.(png|jpe?g|svg)$/)) || {};
    this.filters = uniq(Object.keys(this.images).map(name => name.match(/^([a-z]+)-/)[1]));

    this.scrollArea.current.addEventListener('scroll', this.handleScroll);

    const allItems = Object.keys(this.images).map(name => this.images[name]);

    setTimeout(() => {
      this.setState({ allItems });
    }, 0);
  }

  getImagesByFilter = filter => (
    Object.keys(this.images)
      .filter(name => name.includes(filter))
      .map(name => this.images[name])
  )

  handelSwitchFilter = (name) => {
    this.init = false;
    this.lastItem = React.createRef();
    this.setState({
      filter: name,
      renderedItems: this.getImagesByFilter(name),
      scrollTopPos: 0,
    });
  }

  handleScroll = () => {
    const parent = this.scrollArea.current.getBoundingClientRect();
    const target = this.lastItem.current.getBoundingClientRect();
    if (!this.init) {
      this.scrollLength = target.bottom - parent.bottom;
      this.init = true;
    }
    window.requestAnimationFrame(() => {
      const scrollTopPos = this.scrollLength - (target.bottom - parent.bottom);
      const ratio = this.scrollLength / (parent.height - 100);
      this.setState({ scrollTopPos: scrollTopPos / ratio });
    });
  }

  render() {
    const { flipIn, flipOut, isActive } = this.props;
    const { allItems, renderedItems, scrollTopPos, filter } = this.state;
    return (
      <PageWrap isActive={isActive}>
        <Card
          title="PROJECTS"
          titleInDelayTime={500}
          isActive={isActive}
          isFlipIn={flipIn}
          isFlipOut={flipOut}
          inDelayTime={250}
          outDelayTime={0}
        >
          <Content innerRef={this.scrollArea}>
            <Header>
              {this.filters.map((f, idx) =>
                <Filter key={idx} isActive={filter === f} onClick={() => this.handelSwitchFilter(f)}>{`${f.toLocaleUpperCase()}`}</Filter>
              )}
            </Header>
            <Body>
              {allItems.map((path) => {
                const isVisible = renderedItems.length === 0 || renderedItems.indexOf(path) !== -1;
                return (
                  <Item
                    key={path}
                    src={path}
                    isActive={isVisible}
                    {...{ [isVisible && 'innerRef']: this.lastItem }}
                  />
                );
              })}
            </Body>
          </Content>
          <Scrollbar top={scrollTopPos} />
        </Card>
      </PageWrap>
    );
  }
}

Collection.propTypes = {
  flipIn: PropTypes.bool,
  flipOut: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default Collection;
