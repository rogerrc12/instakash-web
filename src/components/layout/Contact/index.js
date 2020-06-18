import React from 'react';
import Information from './Information';
import Form from './Form';

import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={classes.Contact}>
      <Information />
      <Form />
    </section>
  )
}

export default Contact
