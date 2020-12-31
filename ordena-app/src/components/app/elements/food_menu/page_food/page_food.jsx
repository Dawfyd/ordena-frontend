import { connect } from 'react-redux';
import React from 'react';
import {Image} from 'antd';
import Forms_food from '../forms_menu/forms_menu.jsx'

const Page_food= ({foto, show_food}) => (
show_food.map(d => (
  <section>
    <div className='page_food'>

      <div className='img_food'>
        <Image
          src= {d.photo}
        />
      </div>
      <div className='text_food'>
        <div className='title_food'>
          {d.text}
        </div>
        <div className='desc_food'>
          {d.msg}
        </div>
        <div>
          <p  className='price_food'>${d.price} COP</p>
        </div>
      </div>
      <hr className='line_food'/>
      <div className='form_food'>
        <Forms_food />
      </div>
    </div>
  </section>
  ))
)

const mapStateToProps = state => ({
  showDish: state.showDish,
  show_food: state.show_food,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Page_food);
