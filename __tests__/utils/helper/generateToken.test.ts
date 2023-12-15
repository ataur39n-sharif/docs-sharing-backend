import config from "../../../src/Config";
import * as jwt from "jsonwebtoken";
import {generateToken} from "../../../src/Utils/helper/generateToken";
import {IJWTConfirmAccountPayload} from "../../../src/App/modules/Mail/mail.types";

describe('generateToken', () => {
    describe('accessToken', () => {
        it('should generate a valid access token', () => {
            const data = {userId: 123};
            const token = generateToken.accessToken(data);

            expect(token).toBeDefined();
            expect(typeof token).toBe('string');
        });

        it('should contain expected claims', () => {
            const data = {userId: 123};
            const token = generateToken.accessToken(data);

            const decodedToken = jwt.verify(token, String(config.jwt.accessToken.secret));
            expect((decodedToken as IJWTConfirmAccountPayload).userId).toBe(data.userId);
        });
    });

    describe('refreshToken', () => {
        it('should generate a valid refresh token', () => {
            const data = {userId: 123};
            const token = generateToken.refreshToken(data);

            expect(token).toBeDefined();
            expect(typeof token).toBe('string');
        });

        it('should contain expected claims', () => {
            const data = {userId: 123};
            const token = generateToken.refreshToken(data);

            const decodedToken = jwt.verify(token, String(config.jwt.refreshToken.secret));
            expect((decodedToken as IJWTConfirmAccountPayload).userId).toBe(data.userId);
        });
    });
});
