import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import { IRouletteItem } from '../../models';
import { Pickable, WithHeight } from '../../constants/types';


const Wrapper = styled.div<WithHeight>`
	  width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${props => props.height}px;
`;

const Separator = styled.span<Pickable>`
	  position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    height: 1px;
    background: linear-gradient(0deg, rgba(29, 29, 29, 0) 0%,${props => props.picked ? '#610620' : '#1D1D1D'} 49.58%, rgba(29, 29, 29, 0) 100%);
`;

const Title = styled.span`
	color: ${colors.white};
	font-size: 15px;
  line-height: 18px;
  font-weight: bold;
`;

const Subtitle = styled.span`
	color: ${colors.subtitle};
	font-size: 15px;
  line-height: 18px;
  font-weight: normal;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	padding: 0 0 10px 0;
`;
const Skin = styled.img`
	width: 100%;
	height: auto;
	padding: 0 0 10px 0;
`;

interface IProps {
	item: IRouletteItem;
	height: number;
	picked: boolean;
}

class RouletteItem extends React.Component<IProps> {
	shouldComponentUpdate(nextProps: IProps) {
		return nextProps.item !== this.props.item || nextProps.height !== this.props.height || nextProps.picked !== this.props.picked;
	}

	render() {
		const { item, height, picked } = this.props;
		return (
			<Wrapper height={height}>
				{!item.title && !item.subtitle ? <Skin src={item.image} alt="" /> : <Image src={item.image} alt="" />}
				{item.title && <Title>{item.title}</Title>}
				{item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
				<Separator picked={picked} />
			</Wrapper>
		);
	}
}

export default RouletteItem;
