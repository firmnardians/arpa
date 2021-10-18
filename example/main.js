import arpa from 'arpa-js';

const array = [
	{
		userId: 1,
		id: 1,
		title: 'yellow',
		body: 'yellow body',
	},
	{
		userId: 1,
		id: 2,
		title: 'blue',
		body: 'blue body',
	},
	{
		userId: 1,
		id: 3,
		title: 'green',
		body: 'green body',
	},
	{
		userId: 1,
		id: 4,
		title: 'black',
		body: 'black body',
	},
];

const example = arpa({ data: array, limit: 2, page: 1 });
console.log(example);
