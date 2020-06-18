import React from 'react';
import Questions from '../components/layout/Questions';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Ayuda = () => {
  return (
    <Layout location="/ayuda">
      <SEO title="Home" />
      <div className="container">
        <h1>Preguntas Frecuentes</h1>

        <Questions />
      </div>
    </Layout>
  )
}

export default Ayuda
