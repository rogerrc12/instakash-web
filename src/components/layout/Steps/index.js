import React from "react"
import Fade from "react-reveal/Fade"
import Card from "../../UI/Card"
import Step2 from "../../../assets/images/steps/step-2.svg"
import Step3 from "../../../assets/images/steps/step-3.svg"
import Step4 from "../../../assets/images/steps/step-4.svg"

import classes from "./Steps.module.scss"

const steps = [
  { img: Step2, title: "Registra tu operación", number: "1" },
  { img: Step3, title: "Transfiere a Instakash", number: "2" },
  { img: Step4, title: "Recibe tu Cambio", number: "3" },
]

const Steps = () => {
  const stepsList = steps.map((step, i) => (
    <Fade bottom key={step.number} delay={600 * (i + 1)}>
      <Card
        img={step.img}
        altText={step.title}
        title={step.title}
        number={step.number}
      />
    </Fade>
  ))

  return (
    <section>
      <div className="container">
        <div className={classes.Steps}>{stepsList}</div>
      </div>
    </section>
  )
}

export default Steps
