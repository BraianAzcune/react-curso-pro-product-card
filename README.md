# BRAIAN-TEST-PRODUCT-CARD

Este es un paquete de pruebas desplegando en NPM

## ejemplo

uso de ProductCard

```js
import ProductCard, { ProductCardHandlers } from 'braian-test-product-card';

export default function ExampleUseProductCard() {
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
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
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
        ))}
      </div>
    </div>
  );
}
```
