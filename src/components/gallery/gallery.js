import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SkuCard from '../products/skucard';
import { Container } from './gallery.css';

export default props => (
  <StaticQuery
    query={graphql`
      query SkusForProduct {
        skus: allStripeSku(sort: { fields: [price] }) {
          edges {
            node {
              id
              image
              currency
              price
              attributes {
                name
              }
            }
          }
        }
      }
    `}
    render={({ skus }) => (
      <Container>
        {skus.edges.map(({ node: sku }) => (
          <SkuCard {...props} key={sku.id} sku={sku} />
        ))}
      </Container>
    )}
  />
);
