import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PostEdit from './PostEdit'

Enzyme.configure({ adapter: new Adapter() })

describe("when postEdit renders", () => {
    let postEdit 
    beforeEach(() => {
        let user = { id: 1 }
        let props = {
            current_user :{ id: 1 },
            post: {
                id: 1,
                post_type: 1,
                image: "https",
                unit: 6,
                topic: "Desk",
                author: "Me",
                content: "This is some content that needs about seventy five characters to submit so I think this is enough",
                date: "2020-01-28 05:40:30",
                cohort: "Charlie",
                link: "https://www.youtube.com/",
                user_id: user.id,
            }
        }
        postEdit = shallow(<PostEdit {...props}/>)
    })
    it("renders a heading", () => {
        const postHeading = postEdit.find("h1")
        expect(postHeading.text()).toEqual("Update your post here!")
    })
    it("has a form", () => {
        const postForm = postEdit.find("Form")
        expect(postForm.length).toEqual(1)
    })
    it("has a button", () => {
        const postButton = postEdit.find("Button")
        expect(postButton.length).toEqual(1)
    })
})