import React, { useState, useEffect, useRef } from 'react';
import { sendUserToLogin } from '../../../helpers/functions';
import { useFetch } from '../../../hooks';
import Price from './Price';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../UI/Spinner';
import Swipe from './Swipe';

import classes from './Calculator.module.scss';
import "@loadingio/loading.css/dist/loading.css";
import "ldbutton/dist/ldbtn.min.css";


const validationSchema = Yup.object({
  sending: Yup.number().required('Debes colocar un monto a enviar antes de continuar.').min(30, 'El monto minimo para enviar es de 30 dólares o soles.'),
  receiving: Yup.number().required('Debes colocar un monto para enviar antes de continuar.').min(20, 'El monto minimo para recibir es de 10 dólares o soles.')
})

const Calculator = () => {
  const [buying, setBuying] = useState(0.000);
  const [selling, setSelling] = useState(0.000);
  const [receiving, setReceiving] = useState(1000 * selling);
  const calculatorRef = useRef();

  const { response: limits } = useFetch('https://cors-anywhere.herokuapp.com/https://app.instakash.net/home/getLimits', 
    { headers: { 'Content-Type':'application/json' } }, 'post');

  const { response: prices } = useFetch('https://cors-anywhere.herokuapp.com/https://app.instakash.net/home/getCurrencies', { headers: { 'Content-Type':'application/json' } }, 'post');

  let pricesEl,
      buyingTotal,
      sellingTotal;

  useEffect(() => {
    if (prices) {
      setBuying(buyingTotal);
      setSelling(sellingTotal);

      if (calculatorRef.current.values.condition === "buying") {
        setReceiving((calculatorRef.current.values.sending / selling).toFixed(2));
      } else {
        setReceiving((calculatorRef.current.values.sending * buying).toFixed(2));
      }
    };
  }, [prices, buyingTotal, sellingTotal, selling, buying]);

  const changeConditionHandler = (condition, setFieldValue) => {
    setFieldValue("condition", condition === "buying" ? "selling" : "buying");
  }

  const changeAmountHandler = e => {
    if (calculatorRef.current.values.condition === "buying") {
      setReceiving((+e.target.rawValue / selling).toFixed(2));
    } else {
      setReceiving((+e.target.rawValue * buying).toFixed(2));
    }
  }

  if (!prices) {
    pricesEl = <Spinner />;
  } else {
    buyingTotal = prices[1].buying - prices[1].CommissionBuy;
    sellingTotal = prices[1].selling + prices[1].CommissionSale;

    pricesEl = (
      <>
        <Price title="Compra" price={buyingTotal} divider />
        <Price title="Venta" price={sellingTotal} />
      </>
    )
  }

  return (
    <div className={classes.Calculator}>
      <h1>
        <span>Ahorra</span>
        <br/>
        Cambiando Dólares
      </h1>
      <div className={classes.Prices}>
        {pricesEl}
      </div>
      
      <Formik innerRef={calculatorRef} initialValues={{ sending: 1000, receiving: 0, condition: "selling" }} validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {

          setSubmitting(true);
          try {
            const res = await sendUserToLogin(values);
            window.location.replace(res.data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isValid, setFieldValue, values, errors, isSubmitting }) => 
          <Form className={classes.CalculatorForm}>
            <Input label="compra" condition={values.condition} error={errors.receiving}
              receiving={receiving} selected={() => changeConditionHandler(values.condition, setFieldValue)} changed={changeAmountHandler} 
            />
            <Swipe clicked={() => changeConditionHandler(values.condition, setFieldValue)} condition={values.condition} />
            {errors.sending || errors.receiving ? <span className={classes.ErrorMessage}>* {errors.sending || errors.receiving}</span> : null}

            <div className={classes.CalculatorInfo}>
              <div className={classes.Info}>
                <FontAwesomeIcon icon={['far', 'question-circle']} />
                <p>Monto mayor a <br />
                  {!limits ? '$ 10,000 o S. / 30,000' : `${limits[0].Symbol} ${limits[0].Limit} o ${limits[1].Symbol} ${limits[1].Limit}`} ?
                </p>
              </div>
              <button type="submit" 
                className={`btn ${classes.Action} ld-ext-right ${isSubmitting ? 'running' : ''}`} 
                disabled={!isValid || isSubmitting} 
                onClick={() => setFieldValue("receiving", +receiving)}
              >
                Continuar <span className={`ld ld-ring ld-spin`} />
              </button>
            </div>
          </Form>
        }
      </Formik>
    </div>
  )
}

export default Calculator
