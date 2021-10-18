"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arpa = void 0;
function arpa(data, limit, page) {
    const start = limit * (page - 1);
    const end = limit * page;
    return {
        *[Symbol.iterator]() {
            for (let i = start; i < data.length && i < end; i++) {
                yield data[i];
            }
        },
    };
}
exports.arpa = arpa;
//# sourceMappingURL=index.js.map