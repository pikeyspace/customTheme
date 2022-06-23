// import React from 'react';

// const Test = () => {
//     return (
//         <b>
//             цветные квадратики
//         </b>
//     )
// }
// export default Test;



import React from 'react';

import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from '@magento/peregrine/lib/talons/RootComponents/Product/product.gql.js';
import {useQuery} from "@apollo/client";

const Test = ({ item: { url_key } }) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getStoreConfigData, getProductDetailQuery } = operations;

    const { data: storeConfigData } = useQuery(getStoreConfigData, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    const { error, loading, data } = useQuery(getProductDetailQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !storeConfigData,
        variables: {
            urlKey: url_key
        }
    });

    if (loading) {
        return (
            <>
                Loading...
            </>
        );
    }

    if (error) {
        return (
            <>
                Error
            </>
        );
    }

    const colorArray = data.products.items[0].configurable_options.filter((item) => {
        return item.attribute_code === 'fashion_color';
    })

    const colorItems = colorArray[0].values.map(({ label, swatch_data }) => {
        return {
            title: label,
            value: swatch_data.value
        };
    })

    const ColorTile = ({ colorItems }) => {

        return (
            <>
                {colorItems.map(({ value, title }) => {
                    return (
                        <span
                            title={title}
                            style={{
                                height: '25px',
                                width: '25px',
                                marginRight: '2px',
                                backgroundColor: value
                        }}/>
                    )
                })}
            </>
        );
    }

    return (
        <div
            style={{
                display: "flex"
            }}
        >
            <ColorTile colorItems={colorItems} />
        </div>
    )
}

export default Test;