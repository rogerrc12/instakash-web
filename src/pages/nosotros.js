import React from "react"
import Mission from '../components/layout/AboutUs/Mission';
import Steps from '../components/layout/Steps';
import Banks from '../components/layout/Banks';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Nosotros = () => (
  <Layout location="/nosotros">
    <SEO title="Nosotros" />
    <div className="container">
      <h1>Nosotros</h1>

      <Mission />

      <article className="main-article">
        <h2>¿Cómo funciona?</h2>
        <p>Hacer tus cambios en Instakash es rápido y sencillo. Nuestra plataforma te guia en cada proceso desde el inicio hasta finalizar tu operación. <br /> <b>Solo sigue los pasos y ¡listo!</b>, ahorrarás cambiando dólares.</p>
        <Steps />
        <Banks />
      </article>
    </div>
  </Layout>
);

export default Nosotros;