# Arpa

Arpa is Array Pagination for Javascript Project. Can be used for backend and frontend.

-   Easy to use
-   Lightweight

## Install

To install Arpa

```bash
  npm i arpa-js --save
```

## Usage

Already tested on express and react projects

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `data`    | `array`  | **Required**. Your data array     |
| `limit`   | `number` | **Required**. Array limit of page |
| `page`    | `number` | **Required**. Page of pagination  |

```javascript
import arpa from 'arpa-js';

const array = [
	{
		id: 1,
		title: 'yellow',
		body: 'yellow body',
	},
	{
		id: 2,
		title: 'blue',
		body: 'blue body',
	},
	{
		id: 3,
		title: 'green',
		body: 'green body',
	},
	{
		id: 4,
		title: 'black',
		body: 'black body',
	},
];

const example = arpa({ data: array, limit: 2, page: 1 });
console.log(example);
```

## Authors

-   [@firmnardians](https://github.com/firmnardians)

## License

[MIT](https://choosealicense.com/licenses/mit/)
