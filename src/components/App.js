import React from 'react'
import Wallet from './Wallet'
import Loot from './Loot'

const App = () => {
    return (
        <div>
            <h2>Loot Check</h2>
            <hr />
            <Wallet />
            <hr />
            <Loot />
            <h4>Powered by <a target='_blank' href='https://www.coindesk.com/price'>Coindesk</a></h4>
        </div>
    )
}

export default App
