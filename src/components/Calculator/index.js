import React, { useState, useEffect, useRef } from "react"
import { useFetch } from "../../hooks"
import Price from "./Price"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import Input from "./Input"
import Limits from "./Limits"
import Spinner from "../UI/Spinner"
import Swipe from "./Swipe"
import SavingPrice from "./SavingPrice"

import classes from "./Calculator.module.scss"
import "@loadingio/loading.css/dist/loading.css"
import "ldbutton/dist/ldbtn.min.css"

const validationSchema = Yup.object({
  sending: Yup.number()
    .required("Debes colocar un monto a enviar antes de continuar.")
    .min(30, "El monto minimo para enviar es de 30 dólares o soles."),
  receiving: Yup.number().required(
    "Debes colocar un monto para enviar antes de continuar."
  ),
})

const Calculator = () => {
  const [buying, setBuying] = useState(0.0)
  const [selling, setSelling] = useState(0.0)
  const [receiving, setReceiving] = useState(1000 * selling)
  const calculatorRef = useRef()

  const { response } = useFetch(
    `https://vmi417694.contaboserver.net/api/cambiodivisa/conversion`,
    null,
    "get"
  )
  let pricesEl

  useEffect(() => {
    if (response) {
      setBuying(+response.compra)
      setSelling(+response.venta)
    }
  }, [response])

  const changeConditionHandler = async (oldCondition, setFieldValue) => {
    await setFieldValue(
      "condition",
      oldCondition === "buying" ? "selling" : "buying"
    )
    const { sending, condition } = calculatorRef.current.values
    if (condition === "buying") {
      setFieldValue("receiving", +sending / selling)
    } else {
      setFieldValue("receiving", +sending * buying)
    }
  }

  const changeAmountHandler = (e, name) => {
    const { condition } = calculatorRef.current.values
    const fieldName = name === "sending" ? "receiving" : "sending"
    let fieldValue
    if (condition === "selling") {
      fieldValue =
        name === "sending"
          ? +e.target.rawValue * buying
          : +e.target.rawValue / buying
      calculatorRef.current.setFieldValue(fieldName, fieldValue)
    } else {
      fieldValue =
        name === "sending"
          ? +e.target.rawValue / selling
          : +e.target.rawValue * selling
      calculatorRef.current.setFieldValue(fieldName, fieldValue)
    }
  }

  if (!response) {
    pricesEl = <Spinner />
  } else {
    pricesEl = (
      <>
        <Price title="Compra" price={buying} divider />
        <Price title="Venta" price={selling} />
      </>
    )
  }

  const onSubmit = async (values, { setSubmitting }) => {
    // if (values.receiving === 0) return null;

    // setSubmitting(true);
    // try {
    //   const res = await sendUserToLogin(values);
    // } catch (error) {
    //   console.log(error);
    // }

    window.location.replace("https://app.instakash.net")
  }

  return (
    <div className={classes.Calculator}>
      <h1>
        <span>Ahorra</span>
        <br />
        Cambiando Dólares
      </h1>
      <div className={classes.Prices}>{pricesEl}</div>

      <Formik
        innerRef={calculatorRef}
        initialValues={{
          sending: 1000,
          receiving: 1000 * buying,
          condition: "selling",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ isValid, setFieldValue, values, errors, isSubmitting }) => (
          <Form className={classes.CalculatorForm}>
            <Input
              label="envias"
              name="sending"
              condition={values.condition}
              error={errors.receiving}
              receiving={receiving}
              selling={selling}
              buying={buying}
              selected={() =>
                changeConditionHandler(values.condition, setFieldValue)
              }
              changed={changeAmountHandler}
            />
            <Swipe
              clicked={() =>
                changeConditionHandler(values.condition, setFieldValue)
              }
              setReceiving={setReceiving}
              condition={values.condition}
              sending={values.sending}
              selling={selling}
              buying={buying}
            />
            <Input
              label="recibes"
              name="receiving"
              condition={values.condition}
              error={errors.receiving}
              receiving={receiving}
              selling={selling}
              buying={buying}
              selected={() =>
                changeConditionHandler(values.condition, setFieldValue)
              }
              changed={changeAmountHandler}
            />

            {errors.sending || errors.receiving ? (
              <span className={classes.ErrorMessage}>
                * {errors.sending || errors.receiving}
              </span>
            ) : null}
            <SavingPrice
              condition={values.condition}
              selling={selling}
              buying={buying}
              sending={values.sending}
              receiving={receiving}
            />
            <div className={classes.CalculatorInfo}>
              <Limits />
              <button
                type="submit"
                className={`btn ${classes.Action} ld-ext-right ${
                  isSubmitting ? "running" : ""
                }`}
                disabled={
                  !isValid || isSubmitting || !response || (!selling && !buying)
                }
                onClick={() => setFieldValue("receiving", +receiving)}
              >
                Continuar <span className={`ld ld-ring ld-spin`} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Calculator
