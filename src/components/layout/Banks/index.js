import React from 'react';
import Bank from './Bank';
import BcpLogo from '../../../assets/images/bcp-logo.svg';
import InterbankLogo from '../../../assets/images/interbank-logo.svg';

import classes from './Banks.module.scss';

const Banks = () => {
  return (
    <section className={classes.Banks + ' container'}>
      <h2>Transfernecias Inmediatas</h2>
      <div className={classes.BanksWrapper}>
        <Bank img={BcpLogo} altText="BCP" />
        <Bank img={InterbankLogo} altText="Interbank" />
      </div>
    </section>
  )
}

export default Banks
