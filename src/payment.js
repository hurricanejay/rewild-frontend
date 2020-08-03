import React, { useEffect, useState } from 'react';
import PaymentForm from './components/PaymentForm';

function Payment(){
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      let sqPaymentScript = document.createElement('script');
      sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
      sqPaymentScript.type = "text/javascript"
      sqPaymentScript.async = false;
      sqPaymentScript.onload = () => { setLoaded(true) };
      document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
    }, [])

    return(
        <div className='payment'>
            {loaded &&
                <PaymentForm
                paymentForm={window.SqPaymentForm} />
            }
        </div>
    )
    
}

export default Payment;
