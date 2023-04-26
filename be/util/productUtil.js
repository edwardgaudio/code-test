const productData = require('../data/products');
const { getProductsByCharacteristicIndex }  = require('../data/index/characteristicIndex')
const { sumPointsOfCharacteristics } = require('../data/characteristicPoints')

const productUtil = {
    getAllProductsData: () => {
        return productData;
    },
    getProductsFiltered: (filterObject) => {
/*
        *Assumes 1 characteristic input for now*
        
        Questions
        - what is the desired behavior for if there are mutliple characteristics provided? matchAny? matchBoth? Perhaps another param is provided
        efficiency strategies
        - characteristics as Set so 0(1) lookup on product - ✅ implemented with upfront index creation
        other 
        - what if there are other query params/properties besides characteristics?
 */

        // console.log("filter object: ", filterObject)

        if (!filterObject.characteristics) {
            return productData;
        }
        
        if ( typeof filterObject.characteristics !== 'string') {
            throw new TypeError("characteristics can only be a single element, data types such as array are not yet implemented")
        }


        //old way 0(n)(m)
        // filteredProducts = productData.filter((product, index) => {
        //     console.log(index, product)
        //     return product.characteristics.includes(filterObject.characteristics)
        // })

        // new way 0(1)
        const filteredProducts = getProductsByCharacteristicIndex(filterObject.characteristics)
        
        // console.log("filteredProducts: ", filteredProducts)
        return filteredProducts
    },
    getProductsWithCharacteristicPoints: () => {
        return productData.map((product) => {
            let pointsSum = sumPointsOfCharacteristics(product.characteristics)
            product['characteristicsScore'] = pointsSum
            return product;
        })
    }
}

module.exports = productUtil;