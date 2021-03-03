import React from "react";
import { connect } from "react-redux";
import LogoOrdena from "../../elements/logo_ordena/logo";
import FormLoginSetup from "../../elements/login_admin_setup/form_login_setup/form_login_setup.jsx";
import { Link } from "react-router-dom";

function page() {
  return (
    <div className="page_login_admin_setup">
      <header>
        <div className="logo_header_admin_menu">
          <Link to={"/"}>
            <LogoOrdena />
          </Link>
        </div>
      </header>
      <div className="container_login_admin_setup">
        <FormLoginSetup />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  id_category: state.id_category,
  create_category: state.create_category,
  id_create_category: state.id_create_category,
});

const mapDispatchToProps = (dispatch) => ({
  showDish(d) {
    dispatch({
      type: "SHOW_DISH",
      showMenu: false,
      id_food: d.id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(page);
