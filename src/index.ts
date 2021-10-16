export function paginationArray(arr: string[], pageSize: number, pageNumber: number) {
	const start = pageSize * (pageNumber - 1);
	const end = pageSize * pageNumber;
	return {
		*[Symbol.iterator]() {
			for (let i = start; i < arr.length && i < end; i++) {
				yield arr[i];
			}
		},
	};
}
