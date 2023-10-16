import React from 'react';
import renderer from "react-test-renderer";
import {ProductCard } from "../../src/components/ProductCard";
import { product1 } from './data/products';
const {act} = renderer;

describe("ProductTitle", () => {
    test("debe mostrar el componente", () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    ()=>(
                        <h1>test producto h1</h1>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });

    test("debe incrementar el contador", () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    ({count, increaseBy})=>(
                        <>
                        <h1>test producto card</h1>
                        <span>{count}</span>
                        <button onClick={()=>increaseBy(1)}>incrementar</button>
                        </>
                    )
                }
            </ProductCard>
        )
        let tree = wrapper.toJSON() as any;
        expect(tree).toMatchSnapshot();
        if(!tree.children){
          fail("El test falla porque no se encontraron hijos en el árbol renderizado.");
        }
        if(!tree.children[2]){
          fail("El test falla porque no se encontro el tercer hijo que es el boton");
        }
        // las acciones que cambian estados deben estar dentro de act
        act(()=>{
          tree.children[2].props.onClick();
        })
        tree = wrapper.toJSON() as any;
        expect((tree as any).children[1].children[0]).toBe("1")

    });

    // test("debe mostrar el componente con nombre del producto", () => {
    //     const wrapper = renderer.create(
    //         <ProductCard product={product1}>
    //             <ProductCard></ProductCard>
    //         </ProductCard>
    //     )
    //     expect(wrapper.toJSON()).toMatchSnapshot()
    // });

});