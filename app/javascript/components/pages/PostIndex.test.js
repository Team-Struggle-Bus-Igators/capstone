import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import PostIndex from './PostIndex'

Enzyme.configure({ adapter: new Adapter() })


describe("When index renders", () => {
    it("displays a heading", () => {
        const index = shallow(<PostIndex />)
        const indexHeading = index.find("h2")
        console.log("index heading", indexHeading.debug());
        expect(indexHeading.text()).toEqual("Below you will find all of the help you need to get yourself off that struggle bus!")
      })

    it("renders an dropdown-button", () => {
        const index = shallow(<PostIndex />)
        const indexDropDown = index.find("ButtonDropdown")
        console.log("index dropdownButton", indexDropDown.debug());
        expect(indexDropDown.length).toEqual(1)
     });
     
     it("renders an dropdown-button with a header item and 11 clickable dropdown items with 11 dividers", () => {
        const index = shallow(<PostIndex />)
        const indexDropDownItem = index.find("DropdownItem")
        console.log("index DropdownItem", indexDropDownItem.debug());
        expect(indexDropDownItem.length).toEqual(22)
     });
    //  it("displays a paragraph", () => {
    //     const home = shallow(<Home />)
    //     const homeParagraph = home.find("p")
    //     console.log("Home p tag", homeParagraph.debug());
    //     expect(homeParagraph.length).toEqual(1)
    //   })

    //   it("should have a call to action button that links to the index", () => {
    //     const home = shallow(<Home />)
    //     const navlinkIndex = home.findWhere(n => n.prop('to') === '/postindex').length;
    //     const expected = 1;
    //     expect(navlinkIndex).toEqual(expected)
    //   })

    //   it("should have a call to action button that links to the new page", () => {
    //     const home = shallow(<Home />)
    //     const navlinkNew = home.findWhere(n => n.prop('to') === '/postnew').length;
    //     const expected = 1;
    //     expect(navlinkNew).toEqual(expected)
    //   })

 });