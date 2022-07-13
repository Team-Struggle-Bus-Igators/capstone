import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
Enzyme.configure({ adapter: new Adapter() })

describe('When Not Found is rendered', () => {
    let renderedNotFound
    beforeEach(() => {
        renderedNotFound = shallow(<NotFound />)
    })
    it('displays an h3 title ', () => {
        const notFound = shallow(<NotFound />)
        const notFoundTitleRender = notFound.find('h3')
        expect(notFoundTitleRender.length).toEqual(1)
    })
    it("renders a button that takes you to home page", () => {
        const buttonRender = renderedNotFound.find("button")
        expect(buttonRender.length).toEqual(1)
    })
})