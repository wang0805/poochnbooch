import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';

import Cart from '../components/cart/cart';
import Skus from '../components/products/skus';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Box>
          <Title as="h2" size="large">
            test
          </Title>
          <Modal>
            {/* <video
              src="https://i.imgur.com/gzFqNSW.mp4"
              playsInline
              loop
              autoPlay
              muted
            /> */}
            <Cart>
              <Skus />
            </Cart>
          </Modal>
        </Box>

        <div style={{ height: '50vh' }} />
        <IOExample />
      </Layout>
    );
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
