import React from 'react';
import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from "../../src/components/ProductCard/";
import { product1 } from './data/products';


describe("ProductTitle", () => {
    test("debe mostrar el componente con el titulo personalizado", () => {
        const wrapper = renderer.create(
            <ProductTitle title='prueba'></ProductTitle>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });
    test("debe mostrar el componente con el titulo personalizado con clase", () => {
        const wrapper = renderer.create(
            <ProductTitle title='prueba' className='title-center'></ProductTitle>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });

    test("debe mostrar el componente con nombre del producto", () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                <ProductTitle></ProductTitle>
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });

});