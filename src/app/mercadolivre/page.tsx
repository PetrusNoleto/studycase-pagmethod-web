'use client'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


const MercadoLivrePage = ()=>{
    initMercadoPago('APP_USR-3f7ac6d1-1c76-4664-970e-f398327f2c51');
    return(
        <div>
                <div id="wallet_container"></div>
                
                <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />

        </div>
    )
}
export default MercadoLivrePage