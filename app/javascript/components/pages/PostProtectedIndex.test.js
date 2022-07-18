import React from "react"

import Enzyme, { shallow } from "enzyme"

import Adapter from "enzyme-adapter-react-16"

import PostProtectedIndex from "./PostProtectedIndex"

Enzyme.configure({ adapter: new Adapter() })

describe("when PostProtectedIndex renders", () => {
  let protectedIndex
  let user = { id: 1 }
  beforeEach(() => {
    let props = {
      current_user: { id: 1 },
      posts: [
        {
          id: 1,
          post_type: "Projects",
          image:
            "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
          unit: "Unit 6: Ruby on Rails",
          topic: "Desk",
          author: "Me",
          content:
            "This is some content that needs about seventy five characters to submit so I think this is enough",
          date: "2020-01-28 05:40:30",
          cohort: "Charlie",
          link: "https://www.youtube.com/",
          user_id: user.id,
        },
      ],
    }
    protectedIndex = shallow(<PostProtectedIndex {...props} />)
  })

  it("displays a heading", () => {
    const protectedIndexHeading = protectedIndex.find("h1")
    expect(protectedIndexHeading.text()).toEqual("These are your current posts")
  })

  it("will render a card", () => {
    const protectedIndexCard = protectedIndex.find("Card")
    expect(protectedIndexCard.length).toEqual(1)
  })
})
