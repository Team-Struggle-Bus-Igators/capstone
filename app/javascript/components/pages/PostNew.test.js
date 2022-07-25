import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PostNew from './PostNew'

Enzyme.configure({ adapter: new Adapter() })

describe("when PostNew renders", () => {
    let postNew 
    beforeEach(() => {
        let props = {current_user :{ id: 1 }}
        postNew = shallow(<PostNew {...props}/>)
    })
    it("renders a heading", () => {
        const postHeading = postNew.find("h1")
        expect(postHeading.text()).toEqual("Your Tech Peers here!")
    })
    it("has a form", () => {
        const postForm = postNew.find("Form")
        expect(postForm.length).toEqual(1)
    })
    describe("when form renders", () => {
        let form
        beforeEach(() => {
            form = postNew.find("Form")
        })
        it("has groups for each field in the form", () => {
            const formGroups = form.find("FormGroup").length
            expect(formGroups).toEqual(9)
        })
        it("gives a label to the fields", () => {
            const formLabels = form.find("Label").length
            expect(formLabels).toEqual(9)
        })
        it("gives a box to input data", () => {
            const formInputs = form.find("Input").length
            expect(formInputs).toEqual(9)
        })
    })
    it("has a button", () => {
        const postButton = postNew.find("Button")
        expect(postButton.length).toEqual(1)
    })
})