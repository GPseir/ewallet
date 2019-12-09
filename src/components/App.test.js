import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

configure({ adapter: new Adapter() })

describe('App', () => {
    const app = shallow(<App />)

    test('renders properly', () => {
        expect(app).toMatchSnapshot()
    })

    test('constains a connected Wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    })

    test('contains a connected Loot component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true)
    })

    test('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price')
    })
});
