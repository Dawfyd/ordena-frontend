import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import LogoOrdena from '../../elements/logo_ordena/logo';
import NavUser from '../../elements/footer_nav_user/nav_user';
import Search from '../../elements/search_bar/search.js';
import FoodMenu from '../../elements/food_menu/menu_bar/menu_bar.jsx';
import Float_cart from '../../elements/food_menu/float_cart/float_cart.jsx';
import '../../styles.scss';

function page({show_cart}) {
  return (
    <Fragment>
      <div className="page_menu">
          <header className = 'header_menu'>
            <LogoOrdena />
          </header>
          <div className ='container_menu' style={show_cart === true ? {height: '85vh'}:
                                                                       {height: '92vh'}}>
            <div>
              <Search />
            </div>
            <div className ='food_menu'>
              <FoodMenu />
            </div>
            <div className='resume_cart' style={show_cart === true ? {display:'flex'}:
                                                                     {display:'none'}}>
              <Float_cart />
            </div>
          </div>

          <footer className = 'footer_menu'>

            <NavUser />
          </footer>
        </div>
    </Fragment>

  );
}
const mapStateToProps = state => ({
  show_cart: state.show_cart,
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(page);
