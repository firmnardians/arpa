export default function arpa({ data, limit, page }: { data: string[]; limit: number; page: number }) {
	const start = limit * (page - 1);
	const end = limit * page;

	const pagination = {
		*[Symbol.iterator]() {
			for (let i = start; i < data.length && i < end; i++) {
				yield data[i];
			}
		},
	};

	return [...pagination];
}
