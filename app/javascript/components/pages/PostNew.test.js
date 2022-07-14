import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PostNew from './PostNew'

Enzyme.configure({ adapter: new Adapter() })

describe("when PostNew renders", () => {
    let postNew 
    beforeEach(() => {
        postNew = shallow(<PostNew />)
    })
    it("renders a heading", () => {
        const postHeading = postNew.find("h1")
        expect(postHeading.text()).toEqual("Learnify your tech peers here!")
    })
    it("has a form", () => {
        const postForm = postNew.find("Form")
        expect(postForm.length).toEqual(1)
    })
    it("has a button", () => {
        const postButton = postNew.find("Button")
        expect(postButton.length).toEqual(1)
    })
})