import React from 'react';
import renderer from "react-test-renderer";
import { ProductImage, ProductCard } from "../../src/components/ProductCard";
import { product2 } from './data/products';


describe("ProductTitle", () => {
    test("debe mostrar el componente con el titulo personalizado", () => {
        const wrapper = renderer.create(
            <ProductImage img='https://rincondelatecnologia.com/wp-content/uploads/2015/09/Googlelogo20102013-1.png'></ProductImage>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });
    test("debe mostrar el componente con la imagen del producto", () => {
        const wrapper = renderer.create(
            <ProductImage img='https://rincondelatecnologia.com/wp-content/uploads/2015/09/Googlelogo20102013-1.png' className='title-center'></ProductImage>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });

    test("debe mostrar el componente con la imagen del producto", () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                <ProductImage></ProductImage>
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });

});