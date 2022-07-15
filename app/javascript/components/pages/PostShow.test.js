import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PostShow from './PostShow'
Enzyme.configure({ adapter: new Adapter() })

describe("when PostShow is rendered", () => {
    let renderedPostShow
    beforeEach(() => {
        renderedPostShow = shallow(<PostShow />)
    })
    it("will render a card", () => {
        const postShowCard = renderedPostShow.find("Card")
        expect(postShowCard.length).toEqual(1)
    })
    it("renders a button that takes you to home page", () => {
        const showButton = renderedPostShow.find("Button")
        expect(showButton.length).toEqual(1)

    })
})


