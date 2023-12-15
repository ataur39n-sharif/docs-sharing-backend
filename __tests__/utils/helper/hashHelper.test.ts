import {HashHelper} from "../../../src/Utils/helper/hashHelper";

describe('HashHelper', () => {
    describe('comparePassword', () => {
        it('should return true for correct password', async () => {
            const password = 'mypassword';
            const hashedPassword = await HashHelper.generateHashPassword(password);

            const result = await HashHelper.comparePassword(password, hashedPassword);

            expect(result).toBe(true);
        });

        it('should return false for incorrect password', async () => {
            const password1 = 'mypassword';
            const password2 = 'incorrectpassword';
            const hashedPassword = await HashHelper.generateHashPassword(password1);

            const result = await HashHelper.comparePassword(password2, hashedPassword);

            expect(result).toBe(false);
        });
    });

    describe('generateHashPassword', () => {
        it('should generate a valid hash', async () => {
            const password = 'mypassword';

            const hash = await HashHelper.generateHashPassword(password);

            expect(hash).toBeDefined();
            expect(typeof hash).toBe('string');
        });
    });
});
