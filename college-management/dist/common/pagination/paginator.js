"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginator = void 0;
const paginator = (defaultOptions) => {
    return async (model, args = { where: undefined }, options) => {
        const page = Number((options === null || options === void 0 ? void 0 : options.page) || (defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.page)) || 1;
        const perPage = Number((options === null || options === void 0 ? void 0 : options.perPage) || (defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.perPage)) || 10;
        const skip = page > 0 ? perPage * (page - 1) : 0;
        const [total, data] = await Promise.all([
            model.count({ where: args.where }),
            model.findMany(Object.assign(Object.assign({}, args), { take: perPage, skip })),
        ]);
        const lastPage = Math.ceil(total / perPage);
        return {
            data,
            meta: {
                total,
                lastPage,
                currentPage: page,
                perPage,
                prev: page > 1 ? page - 1 : null,
                next: page < lastPage ? page + 1 : null,
            },
        };
    };
};
exports.paginator = paginator;
//# sourceMappingURL=paginator.js.map