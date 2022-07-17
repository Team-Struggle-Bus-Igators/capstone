import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PostShow from './PostShow'
Enzyme.configure({ adapter: new Adapter() })

describe("when PostShow is rendered", () => {
    let postShowRender
    let user = { id: 1 }
    beforeEach(() => {
        let props = {
            post: {

                id: 1,
                post_type: "Projects",
                image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
                unit: "Unit 6: Ruby on Rails",
                topic: "Desk",
                author: "Me",
                content: "This is some content that needs about seventy five characters to submit so I think this is enough",
                date: "2020-01-28 05:40:30",
                cohort: "Charlie",
                link: "https://www.youtube.com/",
                user_id: user.id
            }

        }
        postShowRender = shallow(<PostShow {...props} />)
    })
    it("will render a card", () => {
        const postShowCard = postShowRender.find("Card")
        expect(postShowCard.length).toEqual(1)
    })
    it("renders a button that takes you to home page", () => {
        const showButton = postShowRender.find("Button")
        expect(showButton.length).toEqual(1)

    })
    it("will render a card title", () => {
        const postShowCardTitle = postShowRender.find("CardTitle")
        expect(postShowCardTitle.length).toEqual(1)
    })
    it("will render a card subtitle", () => {
        const postShowCardSubtitle = postShowRender.find("CardSubtitle")
        expect(postShowCardSubtitle.length).toEqual(2)
    })
    it("will render a card image", () => {
        const postShowCardImg = postShowRender.find("CardImg")
        expect(postShowCardImg.length).toEqual(1)
    })
    it("will render card text", () => {
        const postShowCardText = postShowRender.find("CardText")
        expect(postShowCardText.length).toEqual(1)
    })
})


