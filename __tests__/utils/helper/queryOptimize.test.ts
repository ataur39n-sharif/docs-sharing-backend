import {calculatePagination, manageSorting} from "../../../src/Utils/helper/queryOptimize";

// calculating pagination

describe('calculatePagination', () => {
    it('should calculate pagination options with default values', () => {
        const data = {};
        const pagination = calculatePagination(data);

        expect(pagination).toEqual({
            page: 1,
            limit: 10,
            skip: 0,
        });
    });

    it('should calculate pagination options with custom values', () => {
        const data = {
            page: 2,
            limit: 20,
        };
        const pagination = calculatePagination(data);

        expect(pagination).toEqual({
            page: 2,
            limit: 20,
            skip: 20,
        });
    });
});

// sorting testing
describe('manageSorting', () => {
    it('should manage sorting options with default values', () => {
        const data = {};
        const sorting = manageSorting(data);

        expect(sorting).toEqual({
            sortOrder: 'desc',
            sortBy: 'createdAt',
        });
    });

    it('should manage sorting options with custom values', () => {
        const data = {
            sortOrder: 'asc',
            sortBy: 'name',
        };
        const sorting = manageSorting(data as any);

        expect(sorting).toEqual({
            sortOrder: 'asc',
            sortBy: 'name',
        });
    });
});
