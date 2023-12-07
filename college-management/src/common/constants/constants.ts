import { PaginateFunction, paginator } from '../pagination/paginator';
export const PAGE_SIZE = 1;
export const paginate: PaginateFunction = paginator({ perPage: PAGE_SIZE });
export const orderBy = { id: 'desc' };
