import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe("When the footer renders", () => {
    let footer
    beforeEach(() => {
        footer = shallow(<Footer />)
    })
    it("has three list items", () => {
        const footerlist = footer.find("li")
        expect(footerlist.length).toEqual(3)
    })
    it("has some copyright text", () => {
        const footercopyright = footer.find("p")
        expect(footercopyright.text()).toEqual("© Learnify 2022")
    })
    it("has two links", () => {
        const footerlinks = footer.find("NavLink")
        expect(footerlinks.length).toEqual(2)
    })
})