import {pickFunction} from "../../../src/Utils/helper/pickFunction";

describe('pickFunction', () => {
    it('should pick specified keys from an object', () => {
        const data = {name: 'Alice', age: 30, city: 'New York'};
        const keys = ['name', 'age'];

        const result = pickFunction(data, keys as any);

        expect(result).toEqual({name: 'Alice', age: 30});
    });

    it('should handle missing keys gracefully', () => {
        const data = {name: 'Bob', city: 'Los Angeles'};
        const keys = ['name', 'age'];

        const result = pickFunction(data, keys as any);

        expect(result).toEqual({name: 'Bob'});
    });

    it('should return an empty object when input is empty', () => {
        const data = {};
        const keys = ['name', 'age'];

        const result = pickFunction(data, keys as any);

        expect(result).toEqual({});
    });

    it('should handle undefined values gracefully', () => {
        const data = {name: 'Charlie', age: undefined};
        const keys = ['name', 'age'];

        const result = pickFunction(data, keys as any);

        expect(result).toEqual({name: 'Charlie'});
    });
});
