"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationArray = void 0;
function paginationArray(arr, pageSize, pageNumber) {
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
exports.paginationArray = paginationArray;
//# sourceMappingURL=index.js.map