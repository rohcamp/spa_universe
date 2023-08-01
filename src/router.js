export class Router {
  /* obejto vázio */
  routes = {}; 

  /*mapeamento das rotas */

  add(routeName, page) {
    this.routes [routeName] = page;

    console.log(this.routes)
  }


  route(event) {
    event = event
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
