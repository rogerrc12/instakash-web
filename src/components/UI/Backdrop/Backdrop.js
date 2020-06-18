import React, { useRef, useEffect } from 'react';

import classes from './Backdrop.module.scss'

const Backdrop = (props) => {
  const backdropRref = useRef(null);

  useEffect(() => {
    if (props.show) {
      setTimeout(() => backdropRref.current.classList.add('FadeIn') , 10);
    }
  }, [props.show])


  return props.show ? <div className={classes.Backdrop} ref={backdropRref} onClick={props.close} role="none"></div> : null;
}

export default Backdrop
