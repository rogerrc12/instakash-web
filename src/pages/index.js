import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Exchange from "../components/layout/Home/Exchange";
import Banks from "../components/layout/Banks";
import Steps from "../components/layout/Steps";
import Success from '../components/layout/Home/Success';
import Reviews from '../components/layout/Reviews';

const IndexPage = () => (
  <Layout location="/">
    <SEO title="Cambia soles y dólares de forma rápida y segura" />

    <Exchange />
    <Banks />
    <article className="main-article">
      <div className="container">
        <h2>¿Cómo Funciona?</h2>
        <p>Hacer tus cambios en Instakash es rápido y sencillo. Nuestra plataforma te guia en cada proceso desde el inicio hasta finalizar tu operación. <br /> <b>Solo sigue los pasos y ¡listo!</b>, ahorrarás cambiando dólares.</p>
      </div>
      <Steps />
    </article>

    <Success />

    <article className="main-article">
      <div className="container">
        <h2>Lo que opinan nuestros clientes</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci iste ipsum cum voluptatem, <br /> modi unde! Nobis quas voluptas voluptate sit unde illo nisi omnis totam nam, labore eligendi fugit? Unde!</p>
        <Reviews />
      </div>
    </article>
  </Layout>
)

export default IndexPage
