import '../../../../testSetup'
import app from "../../../../src/app";
// @ts-ignore
import request from "supertest";
import {TestData} from "../../../../testData";

describe('Product api tests',  () => {
    
    let productId:string='';

    it('should fetch all products with pagination', async function () {
        const queryPayload = {
            page: 1,
            limit: 10
        }
        const data = await request(app)
            .get('/api/v1/products')
            .query(queryPayload)
            .expect(200)

        expect(data.body.data.meta.page).toBe(1)
        expect(data.body.data.meta.limit).toBe(10)
    });

    it('should create single product', async () =>{
        const singlePd = await request(app)
            .post('/api/v1/products')
            .send(TestData.singleProductForCreate)
            .expect(201)

        productId =singlePd.body.data._id
    });

    it('should throw error while trying create variable product without variations ', async function () {
        await request(app)
            .post('/api/v1/products')
            .send(TestData.variableProductWithOutVariations)
            .expect(400)
    });

    it('should create variable product', async function () {
        await request(app)
            .post('/api/v1/products')
            .send(TestData.variableProductForCreate)
            .expect(201)
    });

    it('should update simple product information', async function () {
        await request(app)
            .patch(`/api/v1/products/${productId}`)
            .send(TestData.simpleProductForUpdate)
            .expect(200)
    });

    it('should update simple product tags', async function () {
        await request(app)
            .patch(`/api/v1/products/${productId}`)
            .send(TestData.updateProductsTag)
            .expect(200)
    });

    it('should update simple product attributes', async function () {
        await request(app)
            .patch(`/api/v1/products/${productId}`)
            .send(TestData.updateProductAttribute)
            .expect(200)
    });

    it('should update simple product discount', async function () {
        await request(app)
            .patch(`/api/v1/products/${productId}`)
            .send(TestData.updateSingleProductDiscount)
            .expect(200)
    });

    it('should throw error while converting simple to variable product without variations info', async function () {
        await request(app)
            .patch(`/api/v1/products/${productId}`)
            .send(TestData.simpleToVariantProductWithoutVariation)
            .expect(400)
    });

    it('should convert simple product to variable product', async function () {
        await request(app)
            .patch(`/api/v1/products/${productId}`)
            .send(TestData.simpleToVariantProductPayload)
            .expect(200)
    });

    it('should delete a product', async function () {
        await request(app)
            .delete(`/api/v1/products/${productId}`)
            .expect(200)
    });
})