import React from 'react';
import { connect } from 'react-redux';


const Float_cart = ({count_resume, price_resume, show_Order}) =>(
  <div>
    <button className='float_cart' onClick={() => show_Order()}>
      <div className='text_cart'>
        Resumen Ordena: {count_resume} ud - ${price_resume} COP
      </div>
    </button>
  </div>

)

const mapStateToProps = state => ({
  ud_cart: state.ud_cart,
  price_cart: state.price_cart,
  count_resume: state.count_resume,
  price_resume: state.price_resume,

})

const mapDispatchToProps = dispatch => ({
  show_Order() {
    dispatch({
      type: "SHOW_ORDER",
      showOrder:true,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps) (Float_cart);