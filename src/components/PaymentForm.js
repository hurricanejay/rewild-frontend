import React, { Component } from 'react'

class PaymentForm extends Component() {

    render(){
        return (
          <div className="container">
            <div id="form-container">
              <div id="sq-walletbox">
                <button style={{display: (this.state.applePay) ? 'inherit': 'none'}}
                        className="wallet-button"
                        id="sq-apple-pay"></button>
                <button style={{display: (this.state.masterpass) ? 'block': 'none'}}
                        className="wallet-button"
                        id="sq-masterpass"></button>
                <button style={{display: (this.state.googlePay) ? 'inherit': 'none'}}
                        className="wallet-button"
                        id="sq-google-pay"></button>
                <hr />
              </div>
    
              <div id="sq-ccbox">
                <p>
                  <span style={style.leftCenter}>Enter Card Info Below </span>
                  <span style={style.blockRight}>
                    {this.state.cardBrand.toUpperCase()}
                  </span>
                </p>
                <div id="cc-field-wrapper">
                  <div id="sq-card-number"></div>
                  <input type="hidden" id="card-nonce" name="nonce" />
                  <div id="sq-expiration-date"></div>
                  <div id="sq-cvv"></div>
                </div>
                <input
                  id="name"
                  style={style.name}
                  type="text"
                  placeholder="Name"
                />
                <div id="sq-postal-code"></div>
              </div>
              <button className="button-credit-card"
                      onClick={this.requestCardNonce}>Pay</button>
            </div>
            <p style={style.center} id="error"></p>
          </div>
        )
      }
}

  export default PaymentForm;