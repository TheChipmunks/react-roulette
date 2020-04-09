import React from 'react';
import styled, { keyframes } from 'styled-components';
import RouletteItem from './roulette-item';
import { IRouletteItem } from '../../models';
import { Pickable, RouletteAnimatable, WithHeight } from '../../constants/types';

type Wrapper = Pickable & WithHeight

export const RouletteWrapper = styled.div<Wrapper>`
    width: 170px;
    height: ${props => props.height}px;
    margin: 0px 10px;
    position: relative;
    overflow: hidden;
    background: ${props => props.picked ?
	'linear-gradient(rgba(18, 18, 18, 0) 0%, rgb(73, 4, 24) 36.98%, rgb(108, 7, 35) 50.52%, rgb(73, 4, 24) 64.58%, rgba(18, 18, 18, 0) 100%)' :
	'linear-gradient(rgba(18, 18, 18, 0) 11.98%, rgb(14, 14, 14) 31.25%, rgb(23, 23, 23) 49.48%, rgb(14, 14, 14) 67.71%, rgba(18, 18, 18, 0) 87.5%)'
	} ;
`;
export const Gradient = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background: linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%)
`;
const scale = () => keyframes`
  to {
    top: -30px
  }
`;
export const RouletteContentContainer = styled.div<RouletteAnimatable>`
  position: absolute;
  width: 100%;
  top: ${props => props.from}px;
	animation: ${scale} ${props => props.duration}ms;
	animation-fill-mode: forwards;
`;

interface IProps {
	itemHeight: number;
	rouletteHeight: number;
	data: IRouletteItem[];
	prize: IRouletteItem;
	animationDuration: number;
	canPick: boolean;
	onRollEnd?: () => void;
	onPick?: () => void;
	picked: boolean;
}

interface IState {
	from: number;
	data: IRouletteItem[];
}

class Roulette extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		const data = this.shuffle([...props.data]);
		data.splice(1, 0, props.prize);
		this.state = {
			from: -((props.data.length - 2) * props.itemHeight),
			data
		};
	}

	shuffle(array: IRouletteItem[]) {
		return array.sort(() => Math.random() - 0.5);
	}

	onRollEnd = () => {
		this.props.onRollEnd && this.props.onRollEnd();
	};

	renderItem = (height: number) => (item: IRouletteItem, index: number) => <RouletteItem key={`${item.id} ${index}`} item={item} height={height} picked={this.props.picked} />;


	render() {
		const { rouletteHeight, itemHeight, picked } = this.props;
		return (
			<RouletteWrapper height={rouletteHeight} picked={picked}>
				<RouletteContentContainer
					from={this.state.from}
					duration={this.props.animationDuration}
					onAnimationEnd={() => this.onRollEnd()}>
					{this.state.data.map(this.renderItem(itemHeight))}
				</RouletteContentContainer>
				<Gradient onClick={() => this.props.canPick ? this.props.onPick && this.props.onPick() : {}} />
			</RouletteWrapper>
		);
	}
}


export default Roulette;
