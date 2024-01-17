import React from 'react';
import ContentLoader from 'react-content-loader';

export default function PizzaSkeleton() {
	return (
		<ContentLoader
			className='pizza-card'
			speed={2}
			width={280}
			height={478}
			viewBox='0 0 280 478'
			backgroundColor='#e6e6e6'
			foregroundColor='#ededed'
		>
			<circle cx='136' cy='107' r='104' />
			<rect x='0' y='258' rx='0' ry='0' width='280' height='50' />
			<rect x='0' y='323' rx='0' ry='0' width='280' height='90' />
			<rect x='155' y='431' rx='20' ry='20' width='117' height='36' />
			<rect x='7' y='438' rx='5' ry='5' width='117' height='26' />
			<rect x='10' y='221' rx='0' ry='0' width='260' height='30' />
		</ContentLoader>
	);
}
