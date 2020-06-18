import axios from 'axios';

export const sendUserToLogin = async values => {
  try {
    const URL = `https://cors-anywhere.herokuapp.com/https://app.instakash.net/Account/LoginWeb`;

    const body = JSON.stringify({
      amountFrom: values.sending,
      idExchangeFrom: values.condition === "selling" ? 1 : 2,
      amountTo: values.receiving,
      idExchangeTo: values.condition === "selling" ? 2 : 1,
      op: 0,
      rate: 1.00
    });

    const res = axios.post(URL, body, { headers: { 'Content-Type': 'application/json' } });
    
    return res;
  } catch (error) {
    return error;
  }
}