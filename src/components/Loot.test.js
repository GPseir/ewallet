import React from 'react'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot'

configure({ adapter: new Adapter() })

describe('Loot', () => {
    const mockFetchbitcoin = jest.fn()
    let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchbitcoin }
    let loot = shallow(<Loot {...props} />)

    test('renders properly', () => {
        expect(loot).toMatchSnapshot()
    })

    describe('when mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mount(<Loot {...props} />)
        })

        test('dispatches the `fetchBitcoin()` method it receives from props', () => {
            expect(mockFetchbitcoin).toHaveBeenCalled()
        })
    })

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1000' } } } }
            loot = shallow(<Loot {...props} />)

            test('displays the correct bitcoin value', () => {
                expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01')
            })

        })
    })
})
