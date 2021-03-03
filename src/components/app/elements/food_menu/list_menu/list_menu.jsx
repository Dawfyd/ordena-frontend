import React from "react";
import { connect } from "react-redux";
import { useQuery, gql } from "@apollo/client";

const ALL_PRODUCTS = gql`
  query {
    products(findAllProductInput: { companyUuid: "f9U4JIdp6RKKvPCeAkhr_" }) {
      id
      name
      image
      avaliable
      description
      category {
        id
      }
    }
  }
`;

function TargetList({
  temp_category,
  categorys_menu,
  temp_menu,
  id_category,
  data_menu_f,
  data_menu,
  showDish,
  posts,
  favList,
  SaveDataProductsMenuFromDB,
  products
}) {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  SaveDataProductsMenuFromDB(data.products);
  if (id_category === -1) {
    return (
      <div>
        {categorys_menu.map(a => (
          <div key={a.id}>
            <hr
              id="separator_title_card"
              style={
                products.filter(k => k.category.id === a.id - 2).length === 0
                  ? { display: "none" }
                  : { display: "flex" }
              }
            />
            <p
              className="title_cards"
              style={
                products.filter(k => k.category.id === a.id - 2).length === 0
                  ? { display: "none" }
                  : { display: "flex" }
              }
            >
              {a.text}
            </p>
            {products
              .filter(k => k.category.id === a.id - 2)
              .map(d => (
                <button
                  className="link_card"
                  key={d.id}
                  href="/dish"
                  onClick={() => showDish(d)}
                >
                  <div className="card_list">
                    <div className="order_card">
                      <div>
                        <img className="img_card" alt="example" src={d.image} />
                      </div>
                      <div className="text">
                        <div>
                          <div className="title">{d.name}</div>
                          <div className="description">{d.description}</div>
                          <div className="cost">
                            ${formatNumber(d.price)} COP
                          </div>
                        </div>
                        <div className="plus">
                          <button className="button_plus">+</button>
                        </div>
                      </div>
                      <br />
                    </div>
                    <hr id="separator_card" />
                  </div>
                </button>
              ))}
          </div>
        ))}
      </div>
    );
  }
  if (id_category === 0) {
    if (favList.length > 0) {
      return (
        <div>
          <div>holi_1</div>
          <button></button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="title_fav">
            ¿Quieres registrar tus platos favoritos?
          </div>
          <div className="desc_fav">
            Registrate con nosotros, añade favoritos y obten mas beneficios con
            tu cuenta propia!!!
          </div>
          <div className="register_fav">
            <button className="button_register_fav">
              <p className="text_button_fav">Ingresa</p>
            </button>
          </div>
        </div>
      );
    }
  }
  return (
    <div>
      {data_menu_f.map(d => (
        <button
          className="link_card"
          key={d.id}
          href="/dish"
          onClick={() => showDish(d)}
        >
          <div className="card_list">
            <div className="order_card">
              <div>
                <img className="img_card" alt="example" src={d.image} />
              </div>
              <div className="text">
                <div>
                  <div className="title">{d.name}</div>
                  <div className="description">{d.description}</div>
                  <div className="cost">${formatNumber(d.price)} COP</div>
                </div>
                <div className="plus">
                  <button className="button_plus">+</button>
                </div>
              </div>
              <br />
            </div>
            <hr id="separator_card" />
          </div>
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  data_menu_f: state.data_menu_f,
  id_category: state.id_category,
  data_menu: state.data_menu,
  posts: state.posts,
  products: state.products,
  temp_menu: state.temp_menu,
  categorys_menu: state.categorys_menu,
  temp_category: state.temp_category,
  favList: state.favList
});

function formatNumber(price_item) {
  return new Intl.NumberFormat("de-DE").format(price_item);
}

const mapDispatchToProps = dispatch => ({
  showDish(d) {
    dispatch({
      type: "SHOW_DISH",
      showMenu: false,
      id_food: d.id
    });
  },
  SaveDataProductsMenuFromDB(products) {
    dispatch({
      type: "RECEIVE_PRODUCTS_DB",
      db_products: products
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TargetList);
