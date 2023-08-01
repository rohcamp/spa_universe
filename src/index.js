import  {Router} from "./router.js"

//mapeamento das rotas

const router = new Router()

router.add("/", "./pages/home.html")
router.add("/universo", "./pages/universo.html")
router.add("/exploracao", "./pages/exploracao.html")
router.add(404, "./pages/404.html")

//chama a function e exibe o home
router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.handle()