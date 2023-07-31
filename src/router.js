export class Router  {

    routes = {} //somente para identificar como obj

    add(routeName, page) {
        this.routes[this.routeName] = page;
    }

    route(event) {
        event = event || window.event;
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