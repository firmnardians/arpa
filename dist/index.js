"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arpa({ data, limit, page }) {
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
exports.default = arpa;
//# sourceMappingURL=index.js.map