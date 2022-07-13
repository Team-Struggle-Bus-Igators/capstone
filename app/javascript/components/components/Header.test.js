import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("When the header renders", () => {
    let header
    beforeEach(() => {
        header = shallow(<Header />)
    })
    it("renders a header to the user", () => {
        const headerRender = header.find("Navbar")
        expect(headerRender.length).toEqual(1)
    })
    it("has a home and index link", () => {
        const headerLinks = header.find("NavLink")
        expect(headerLinks.length).toEqual(2)
    })
    it("has a sign in and sign up link", () => {
        const deviseHeaderLinks = header.find("NavItem")
        expect(deviseHeaderLinks.length).toEqual(2)
    })
})