import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';
import { ProductCardHandlers } from '../dist/components/ProductCard/ProductCard';


const App = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <ProductCard
          product={{ id: "1", title: "mug", img: undefined }}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {(v: ProductCardHandlers) => (
            <>
              <ProductCard.Image></ProductCard.Image>
              <ProductCard.Title></ProductCard.Title>
              <ProductCard.Buttons></ProductCard.Buttons>
            </>
          )}
        </ProductCard>

      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
