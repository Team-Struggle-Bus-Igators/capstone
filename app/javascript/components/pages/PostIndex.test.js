import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import PostIndex from './PostIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When index renders", () => {
   let index
   let user = { id: 1}
   beforeEach(() => {
      let props = {
         post: [
            {
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
         ]
      }
      index = shallow(<PostIndex {...props}/>)
   })

   it("displays a heading", () => {
      const indexHeading = index.find("h2")
      console.log("index heading", indexHeading.debug());
      expect(indexHeading.text()).toEqual("Below you will find all of the help you need to get yourself off that struggle bus!")
   })

   it("renders an dropdown-button", () => {
      const indexDropDown = index.find("ButtonDropdown")
      console.log("index dropdownButton", indexDropDown.debug());
      expect(indexDropDown.length).toEqual(1)
   });
   
   it("renders an dropdown-button with a header item and 11 clickable dropdown items with 11 dividers", () => {
      const indexDropDownItem = index.find("DropdownItem")
      console.log("index DropdownItem", indexDropDownItem.debug());
      expect(indexDropDownItem.length).toEqual(22)
   });
   
   it("will render a card", () => {
      
      const indexCard = index.find("Card")
      expect(indexCard.length).toEqual(4)
   })
 });