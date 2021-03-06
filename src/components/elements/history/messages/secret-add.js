// @flow
import React from 'react';
import { Text, Bold } from '../ItemComponents';
import Message from './message';

export default class SecretAdd extends Message {
	render() {
		const { event } = this.props;

		return (
			<Text>
				{this.getDisplayName()}
				added secret{' '}
				<Bold>{event.payload.name ? event.payload.name : event.payload.uid}</Bold>
			</Text>
		);
	}
}
