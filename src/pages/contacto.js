import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/layout/Contact';

const contacto = () => {
  return (
    <Layout location="/contacto">
      <SEO title="Contacto" />

      <div className="container">
        <Contact />
      </div>
    </Layout>
  )
}

export default contacto
