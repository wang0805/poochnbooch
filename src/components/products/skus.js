import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SkuCard from './skucard';

const conatinerStyles = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
};

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
      <div style={conatinerStyles}>
        {skus.edges.map(({ node: sku }) => (
          <SkuCard {...props} key={sku.id} sku={sku} />
        ))}
      </div>
    )}
  />
);
