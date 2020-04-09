import React from 'react';
import Roulette from './components/roulette';
import styled from 'styled-components';
import { IRouletteItem } from './models';
import image1 from './assets/images/1.svg';
import image2 from './assets/images/2.svg';
import image3 from './assets/images/3.svg';
import awp from './assets/images/awp.png';

const ContentWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
`;
const RouletteHeight = 380;
const itemHeight = 140;


const items: IRouletteItem[] = [{ 'id': 1, 'title': 'Market Discount', 'subtitle': undefined, 'image': image2 }, { 'id': 2, 'title': '+3 hours', 'subtitle': 'to psychologist', 'image': image1}, { 'id': 3, 'title': 'Banana', 'subtitle': "Banana Subtitle", 'image': image3 }, { 'id': 4, 'title': 'Save Experience', 'subtitle': undefined, 'image': image1 }, { 'id': 5, 'title': undefined, 'subtitle': undefined, 'image': awp },{ 'id': 1, 'title': 'Market Discount', 'subtitle': undefined, 'image': image2 }, { 'id': 2, 'title': '+3 hours', 'subtitle': 'to psychologist', 'image': image1}, { 'id': 3, 'title': 'Banana', 'subtitle': "Banana Subtitle", 'image': image3 }, { 'id': 4, 'title': 'Save Experience', 'subtitle': undefined, 'image': image1 }, { 'id': 5, 'title': undefined, 'subtitle': undefined, 'image': awp },{ 'id': 1, 'title': 'Market Discount', 'subtitle': undefined, 'image': image2 }, { 'id': 2, 'title': '+3 hours', 'subtitle': 'to psychologist', 'image': image1}, { 'id': 3, 'title': 'Banana', 'subtitle': "Banana Subtitle", 'image': image3 }, { 'id': 4, 'title': 'Save Experience', 'subtitle': undefined, 'image': image1 }, { 'id': 5, 'title': undefined, 'subtitle': undefined, 'image': awp },{ 'id': 1, 'title': 'Market Discount', 'subtitle': undefined, 'image': image2 }, { 'id': 2, 'title': '+3 hours', 'subtitle': 'to psychologist', 'image': image1}, { 'id': 3, 'title': 'Banana', 'subtitle': "Banana Subtitle", 'image': image3 }, { 'id': 4, 'title': 'Save Experience', 'subtitle': undefined, 'image': image1 }, { 'id': 5, 'title': undefined, 'subtitle': undefined, 'image': awp },{ 'id': 1, 'title': 'Market Discount', 'subtitle': undefined, 'image': image2 }, { 'id': 2, 'title': '+3 hours', 'subtitle': 'to psychologist', 'image': image1}, { 'id': 3, 'title': 'Banana', 'subtitle': "Banana Subtitle", 'image': image3 }, { 'id': 4, 'title': 'Save Experience', 'subtitle': undefined, 'image': image1 }, { 'id': 5, 'title': undefined, 'subtitle': undefined, 'image': awp }];
const prizes: IRouletteItem[] = [{ 'id': 6, 'title': 'Prize 1', 'subtitle': 'subtitle 1', 'image': image1 }, { 'id': 7, 'title': 'Prize 2', 'subtitle': 'subtitle 2', 'image': image2 }, { 'id': 8, 'title': 'Prize 3', 'subtitle': 'subtitle 3', 'image': image3 }];

export default class App extends React.Component {

	render() {

		return (
			<ContentWrapper>
				<Roulette data={items}
				          prize={prizes[0]}
				          itemHeight={itemHeight}
				          rouletteHeight={RouletteHeight}
				          picked={false}
				          canPick={false}
				          animationDuration={3000}
				/>
				<Roulette data={items}
				          prize={prizes[1]}
				          itemHeight={itemHeight}
				          rouletteHeight={RouletteHeight}
				          picked={false}
				          canPick={false}
				          animationDuration={6000}
				/>
				<Roulette data={items}
				          prize={prizes[2]}
				          itemHeight={itemHeight}
				          rouletteHeight={RouletteHeight}
				          picked={false}
				          canPick={false}
				          animationDuration={9000}
				/>
			</ContentWrapper>
		);
	}
}
