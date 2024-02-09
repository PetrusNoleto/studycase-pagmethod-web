import stylesChosePagMethod from './assets/css/choseMethodPag.module.css'
import PagBox from './components/pagBox/pagbox'


export default function App(){
  return(
    <>
      <div className={stylesChosePagMethod.methodsBox}>
          <header className={stylesChosePagMethod.methodsBoxHeader}>
               <h1 className={stylesChosePagMethod.methodsBoxHeaderContent}>escolha um metodo de pagamento</h1> 
          </header>
          <main>
              <nav className={stylesChosePagMethod.methodsLinksBox}>
                  <PagBox boxLink={"/pix/"} boxName={"pix"}/>
                  <PagBox boxLink={"/mercadopago/"} boxName={"mercado pago"}/>
              </nav>
          </main>
      </div>
    </>
  )
}