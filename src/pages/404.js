import React from "react";
import { Link } from 'gatsby';
import Logo from '../assets/images/logo-color.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <article className="not-found">
      <div className="container">
        <img src={Logo} alt="Instakash" />
        <h1>EL SITIO QUE BUSCAS NO SE HA ENCONTRADO!</h1>
        <p>¿No encuentras los que estás buscando?, que te parece si regresas al <Link to="/">inicio</Link> y empiezas otra vez.</p>
        <Link to="/" className="btn">Ir al inicio</Link>
      </div>
    </article>
  </Layout>
)

export default NotFoundPage
