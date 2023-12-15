const variableProductForCreate={
    "name": "Sony Playstation 5",
    "description": "Next-gen gaming console",
    "category": "gaming",
    "slug": "test"+Date.now(),
    "images": ["sony-ps5-black.jpg", "sony-ps5-white.jpg"],
    "thumbnail": "sony-ps5-thumbnail.jpg",
    "productType": "variable_product",
    "tags": ["gaming", "console", "next-gen"],
    "attributes": [
        {
            "label": "Edition",
            "values": ["Standard", "Digital"]
        },
        {
            "label": "Color",
            "values": ["Black", "White"]
        }
    ],
    "variableProducts": [
        {
            "image": "sony-ps5-black.jpg",
            "price": 499,
            "stock": 20,
            "attributes": [
                {
                    "label": "Edition",
                    "value": "Standard"
                },
                {
                    "label": "Color",
                    "value": "Black"
                }
            ],
            "discount": {
                "type": "percentage",
                "value": 5
            }
        },
        {
            "image": "sony-ps5-white.jpg",
            "price": 499,
            "stock": 20,
            "attributes": [
                {
                    "label": "Edition",
                    "value": "Standard"
                },
                {
                    "label": "Color",
                    "value": "White"
                }
            ],
            "discount": {
                "type": "percentage",
                "value": 5
            }
        },
        {
            "image": "sony-ps5-black.jpg",
            "price": 399,
            "stock": 15,
            "attributes": [
                {
                    "label": "Edition",
                    "value": "Digital"
                },
                {
                    "label": "Color",
                    "value": "Black"
                }
            ],
            "discount": {
                "type": "percentage",
                "value": 5
            }
        },
        {
            "image": "sony-ps5-white.jpg",
            "price": 399,
            "stock": 15,
            "attributes": [
                {
                    "label": "Edition",
                    "value": "Digital"
                },
                {
                    "label": "Color",
                    "value": "White"
                }
            ],
            "discount": {
                "type": "percentage",
                "value": 5
            }
        }
    ],
    "metadata": {
        "title": "Sony Playstation 5",
        "description": "Experience the future of gaming with the Sony Playstation 5."
    }
}

const variableProductWithOutVariations={
    "name": "Sony Playstation 5",
    "description": "Next-gen gaming console",
    "category": "gaming",
    "slug": "test"+Date.now(),
    "images": ["sony-ps5-black.jpg", "sony-ps5-white.jpg"],
    "thumbnail": "sony-ps5-thumbnail.jpg",
    "productType": "variable_product",
    "tags": ["gaming", "console", "next-gen"],
    "attributes": [
        {
            "label": "Edition",
            "values": ["Standard", "Digital"]
        },
        {
            "label": "Color",
            "values": ["Black", "White"]
        }
    ],
    "metadata": {
        "title": "Sony Playstation 5",
        "description": "Experience the future of gaming with the Sony Playstation 5."
    }
}
const singleProductForCreate ={
    "name": "Smartwatch",
    "category": "Wearables",
    "slug": "abc_com"+Date.now(),
    "productType": "simple_product",
    "price": 129,
    "discount": {
        "type": "percentage",
        "value": 10
    },
    "images": [
        "smartwatch_image1.jpg",
        "smartwatch_image2.jpg"
    ],
    "thumbnail": "smartwatch_thumbnail.jpg",
    "stock": 35,
    "description": "Stay connected and track your fitness with this smartwatch.",
    "short_description": "A smarter way to stay active and informed.",
    "attributes": [
        {
            "label": "color",
            "values": [
                "black",
                "silver",
                "gold"
            ]
        }
    ],
    "tags": [
        "smartwatch",
        "wearables",
        "fitness"
    ],
    "metadata": {
        "title": "Smartwatch",
        "description": "Elevate your lifestyle with this feature-packed smartwatch."
    }
}

const simpleProductForUpdate={
    "name": "Update product name",
    "category": "update category",
    "productType": "simple_product",
    "description": "update Details for product",
}

const simpleToVariantProductPayload = {
    "productType": "variable_product",
    "variableProducts": [
        {
            "image": "sony-ps5-black.jpg",
            "price": 499,
            "stock": 20,
            "attributes": [
                {
                    "label": "Edition",
                    "value": "Standard"
                },
                {
                    "label": "Color",
                    "value": "Black"
                }
            ],
            "discount": {
                "type": "percentage",
                "value": 5
            }
        },
        {
            "image": "sony-ps5-white.jpg",
            "price": 499,
            "stock": 20,
            "attributes": [
                {
                    "label": "Edition",
                    "value": "Standard"
                },
                {
                    "label": "Color",
                    "value": "White"
                }
            ],
            "discount": {
                "type": "percentage",
                "value": 5
            }
        },
        {
            "image": "sony-ps5-black.jpg",
            "price": 399,
            "stock": 15,
            "attributes": [
                {
                    "label": "Edition",
                    "value": "Digital"
                },
                {
                    "label": "Color",
                    "value": "Black"
                }
            ],
            "discount": {
                "type": "percentage",
                "value": 5
            }
        },
        {
            "image": "sony-ps5-white.jpg",
            "price": 399,
            "stock": 15,
            "attributes": [
                {
                    "label": "Edition",
                    "value": "Digital"
                },
                {
                    "label": "Color",
                    "value": "White"
                }
            ],
            "discount": {
                "type": "percentage",
                "value": 5
            }
        }
    ]
}
const simpleToVariantProductWithoutVariation = {
    "productType": "variable_product"
}
const updateSingleProductDiscount={
    "productType": "simple_product",
    "discount": {
        "type": "fixed",
        "value": Math.round(Math.random() *100)
    }
}

const updateProductsTag={
    "productType": "simple_product",
    "tags": [
        `update ${Math.round(Math.random() *100)}`,`update ${Math.round(Math.random() *100)}`
    ]
}

const updateProductAttribute={
    "productType": "simple_product",
    "attributes": [
        {
            "label": `label ${Math.round(Math.random() *100)}`,
            "values": [
                `value - ${Math.round(Math.random() *100)}`,
                `value - ${Math.round(Math.random() *100)}`
            ]
        },
        {
            "label": `label ${Math.round(Math.random() *100)}`,
            "values": [
                `value - ${Math.round(Math.random() *100)}`,
                `value - ${Math.round(Math.random() *100)}`
            ]
        }
    ]
}

export const TestData={
    variableProductForCreate,
    singleProductForCreate,
    simpleProductForUpdate,
    simpleToVariantProductPayload,
    simpleToVariantProductWithoutVariation,
    updateSingleProductDiscount,
    updateProductsTag,
    updateProductAttribute,
    variableProductWithOutVariations
}