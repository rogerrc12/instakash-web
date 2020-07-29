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
            <p>Si hay algún error en los datos o si simplemente ha cambiado de domicilio, el equipo de soporte al cliente de Instakash puede ayudarle a corregir esta información. En este caso, necesitará enviarnos un correo con algún tipo de prueba para demostrar que estos datos son correctos a contacto@instakash.net</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cómo cambio mi dirección de correo electrónico?</h2>
            <p>La dirección de correo electrónico solo podrá ser cambiada comunicándote con nosotros vía correo electrónico. Deberá escribirnos a contacto@instakash.net.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cómo cambio mi contraseña?</h2>
            <p>Puedes crear una nueva contraseña dándole click a "olvidé mi contraseña" en la sección de inicio de sesión. Recibirás un correo electrónico con las instrucciones a seguir para restablecer tu contraseña.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cómo reviso mis transacciones?</h2>
            <p>Todas sus transacciones quedan registradas y ligadas a su cuenta en la sección de “ACTIVIDAD”. Puede verificar, en tiempo real, el avance de cada transacción que has colocado. Asimismo, podrá seleccionar transacciones frecuentes para poder realizarlas con más rapidez.</p>
          </div>
        </TabPane>
        <TabPane tab="Cambio de divisa" key="2" className={classes.Tab}>
          <div className={classes.Question}>
            <h2>¿Cuál es el monto máximo de operación?</h2>
            <p>Instakash no tiene monto máximo. Sin embargo, su banco le puede asignar un máximo de transferencia al día. En ese caso puede realizar su transferencia en la misma agencia, por ventanilla (solo si la cuenta es de Lima). Por ventanilla no existe límite. Luego debe enviar una foto de su constancia de transferencia al correo cambios@instakash.net para completar la operación con éxito. *En el caso de provincias, solo puede utilizar su banca en línea para empresas o personas.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Con qué monedas trabaja Instakash?</h2>
            <p>Por el momento, solo trabajamos con dólares y soles.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cuál es el tipo de cambio garantizado?</h2>
            <p>El tipo de cambio cerrado al momento de pactar la operación define el monto que el cliente recibe después de validar la operación. Este tipo de cambio está garantizado por un tiempo de 30 minutos luego de colocada la orden de compra, tiempo durante el cual el usuario deberá realizar la transferencia a las cuentas de Instakash y enviar el comprobante.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Puedo ver el avance de mis operaciones?</h2>
            <p>Todas las transferencias que hayas realizado quedarán registradas en tu perfil. Además, serás notificado vía correo electrónico cuando se realice con éxito cada transacción.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cuál es la prueba de que se realizó el pago?</h2>
            <p>La constancia de tu operación puede ser el Número de operación del comprobante de pago si es de un mismo banco. Si es interbancaria, la constancia será el mismo voucher que puede ser la constancia física (papel recibido después de hacer el depósito) o virtual (enviada por mail al momento de hacer la transferencia).</p>
          </div>
          <div className={classes.Question}>
            <h2>Tiempo estimado de los bancos</h2>
            <p>El tiempo estimado que demora la transferencia está sujeto al tiempo que demoren en llegar los fondos transferidos a las cuentas de Instakash. Nosotros no tenemos ningún control sobre el tiempo que pueda llegar a demorar la transferencia de los fondos. Instakash no realizará ninguna transacción sin antes haber recibido los fondos por parte del cliente. Por lo general, el tiempo total para completar la transacción no debería ser mayor a dos días hábiles.</p>
          </div>
          <div className={classes.Question}>
            <h2>Validación del depósito</h2>
            <p>La validación del depósito se dará cuando recibamos en nuestras cuentas el dinero y lo validemos con el voucher de la operación. Una vez confirmada la operación en nuestras cuentas recibirás una confirmación vía mail y en nuestro portal web. El proceso de validación demora como máximo un día hábil.</p>
          </div>
          <div className={classes.Question}>
            <h2>¿Cómo cancelo una operación?</h2>
            <p>Si ya has creado una orden de compra y hay datos del destinatario que no son correctos, por favor ponte en contacto con nosotros lo antes posible para que podamos ayudarte. Puedes escribirnos un mail a contacto@instakash. o a nuestros whatsapp con tus datos y te contactaremos a la brevedad para solucionar el problema.</p>
          </div>
        </TabPane>
        <TabPane tab="Avance de efectivo" key="3" className={classes.Tab}></TabPane>
      </Tabs>
    </section>
  )
}

export default Questions
