import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Claims from "../components/layout/Claims"

const Reclamaciones = () => {
  return (
    <Layout location="/libro-de-reclamaciones">
      <SEO title="Reclamaciones" />

      <div className="container">
        <h1>Reclamaciones</h1>

        <Claims />
      </div>
    </Layout>
  )
}

export default Reclamaciones
