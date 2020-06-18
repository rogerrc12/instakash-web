import React from 'react';
import { Tabs } from 'antd';

import classes from './Questions.module.scss';

const { TabPane } = Tabs;

const Questions = () => {
  return (
    <section className={classes.Questions}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Cuenta" key="1" className={classes.Tab}>
          <div className={classes.Question}>
            <h2>¿Cómo edito los datos de perfil?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iste libero, saepe autem nihil quasi eveniet ullam ratione. Aperiam asperiores culpa mollitia voluptatum id dignissimos commodi deleniti inventore, expedita nulla.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cómo cambio mi dirección de correo electrónico?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iste libero, saepe autem nihil quasi eveniet ullam ratione. Aperiam asperiores culpa mollitia voluptatum id dignissimos commodi deleniti inventore, expedita nulla.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cómo cambio mi contraseña?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iste libero, saepe autem nihil quasi eveniet ullam ratione. Aperiam asperiores culpa mollitia voluptatum id dignissimos commodi deleniti inventore, expedita nulla.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cómo reviso mis transacciones?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iste libero, saepe autem nihil quasi eveniet ullam ratione. Aperiam asperiores culpa mollitia voluptatum id dignissimos commodi deleniti inventore, expedita nulla.</p>
          </div>
        </TabPane>
        <TabPane tab="Cambio de divisa" key="2" className={classes.Tab}>
          <h2>¿Cómo reviso mis transacciones?</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iste libero, saepe autem nihil quasi eveniet ullam ratione. Aperiam asperiores culpa mollitia voluptatum id dignissimos commodi deleniti inventore, expedita nulla.</p>
        </TabPane>
        <TabPane tab="Seguridad" key="3" className={classes.Tab}>
          <h2>¿Cómo reviso mis transacciones?</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iste libero, saepe autem nihil quasi eveniet ullam ratione. Aperiam asperiores culpa mollitia voluptatum id dignissimos commodi deleniti inventore, expedita nulla.</p>
        </TabPane>
      </Tabs>
    </section>
  )
}

export default Questions
