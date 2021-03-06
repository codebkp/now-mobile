// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import Domain from '../elements/domains/Domain';
import { connect } from '../../Provider';

type Props = {
	context: any | Context,
};

const containerStyle = {
	paddingBottom: 80,
	paddingHorizontal: '6%',
};

const Domains = ({ context }: Props) => {
	const domains = context.domains.sort((a, b) => new Date(b.created) - new Date(a.created));

	return (
		<ScrollView contentContainerStyle={containerStyle}>
			{domains.map((domain, i) => (
				<Domain key={domain.uid} domain={domain} last={i === domains.length - 1} />
			))}
		</ScrollView>
	);
};

export default connect(Domains);
