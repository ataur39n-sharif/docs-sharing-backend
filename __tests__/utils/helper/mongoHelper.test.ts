import {Types} from 'mongoose';
import {MongoHelper} from "../../../src/Utils/helper/mongoHelper";

describe('convertToObjectId', () => {
    it('should convert a valid string to ObjectId', () => {
        const idString = '605c4f8c11a9bc1f1c8b90a2'; // Replace with a valid ObjectId string

        const objectId = MongoHelper.convertToObjectId(idString);

        expect(objectId).toBeInstanceOf(Types.ObjectId);
        expect(objectId.toHexString()).toEqual(idString);
    });

    it('should throw an error for an invalid string', () => {
        const invalidIdString = 'invalidObjectId';

        expect(() => MongoHelper.convertToObjectId(invalidIdString)).toThrowError();
    });
});
