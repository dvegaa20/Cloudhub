import React from 'react'
import './clients.css'
import { Patreon, Airbnb, Fiberplane, Coinbase, Griffin, Help_Scout, Plaid } from '../../assets/index_clients'

const Clients = () => {
  return (
    <div className='saas__clients'>
      <div className='saas__clients-images'>
        <img src={Patreon} alt='patreon' href='https://www.patreon.com/' />
        <img src={Airbnb} alt='airbnb' href='https://www.airbnb.mx/' />
        <img src={Fiberplane} alt='fiberplane' href='' />
        <img src={Coinbase} alt='coinbase' href='https://www.coinbase.com/es' />
        <img src={Griffin} alt='griffin' href='' />
        <img src={Help_Scout} alt='help_scout' href='https://www.helpscout.com/' />
        <img src={Plaid} alt='plaid' href='https://plaid.com/' />
      </div>
    </div>
  )
}

export default Clients