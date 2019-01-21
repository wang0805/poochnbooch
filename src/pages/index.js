import React, { Component } from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';

import Cart from '../components/cart/cart';
import Skus from '../components/gallery/gallery';
import CustomizedDialogDemo from '.././components/testing';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Box>
          <Title as="h2" size="large">
            Pooch And Booch
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
        <Skus />
        <CustomizedDialogDemo />
        {/* <Gallery items={data.homeJson.gallery} /> */}
        <div style={{ height: '50vh' }} />
        <IOExample />
      </Layout>
    );
  }
}

export default Index;
