// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'



//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

// describe("When Home renders", () => {
//     it("displays a image", () => {
//       const home = shallow(<Home />)
//     //   const image = home.find("img")
//       console.log("HOME", home.debug());
//       expect(home.find("img").prop("src")).toEqual(HomePagePhoto);
//     })

describe("When Home renders", () => {
    it("displays a heading", () => {
        const home = shallow(<Home />)
        const homeHeading = home.find("h1")
        console.log("Home heading", homeHeading.debug());
        expect(homeHeading.text()).toEqual("Welcome to Learnify")
      })

    it("renders an image", () => {
        const home = shallow(<Home />);
        console.log("HOME", home.debug());
        expect(home.find("img").prop("alt")).toEqual('HomePagePhoto');
     });
     
     it("displays a paragraph", () => {
        const home = shallow(<Home />)
        const homeParagraph = home.find("p")
        console.log("Home p tag", homeParagraph.debug());
        expect(homeParagraph.length).toEqual(1)
      })

      it("should have a call to action button that links to the index", () => {
        const home = shallow(<Home />)
        const navlinkIndex = home.findWhere(n => n.prop('to') === '/postindex').length;
        const expected = 1;
        expect(navlinkIndex).toEqual(expected)
      })

      it("should have a call to action button that links to the new page", () => {
        const home = shallow(<Home />)
        const navlinkNew = home.findWhere(n => n.prop('to') === '/postnew').length;
        const expected = 1;
        expect(navlinkNew).toEqual(expected)
      })

 });

