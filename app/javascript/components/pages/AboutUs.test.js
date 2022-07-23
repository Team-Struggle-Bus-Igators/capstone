import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'
Enzyme.configure({ adapter: new Adapter() })

describe("When AboutUs renders", () => {
    let about
    beforeEach(() => {
        about = shallow(<AboutUs />)
    })
    it("renders a Learnify Logo", () => {
        const logo = about.find("img").first()
        expect(logo.length).toEqual(1)
    })
    it("renders a heading", () => {
        const h1 = about.find('h1').text()
        expect(h1).toEqual("Meet the Team!")
    })
    it("has three cards", () => {
        const cards3 = about.find('Card').length
        expect(cards3).toEqual(3)
    })
    describe("when a card renders", () => {
        let card
        beforeEach(() => {
            card = about.find('Card').first()
        })
        it("has two images for each card", () => {
            const img = card.find('img')
            expect(img.length).toEqual(2)
        })
        it("has a name", () => {
            const cardName = card.find('CardTitle').length
            expect(cardName).toEqual(1)
        })
        it("has a subtitle", () => {
            const cardSub = card.find('CardSubtitle').length
            expect(cardSub).toEqual(1)
        })
        it("has some descriptive text", () => {
            const cardText = card.find('CardText').length
            expect(cardText).toEqual(1)
        })
        it("has a profile image", () => {
            const cardImg = card.find('CardImg').length
            expect(cardImg).toEqual(1)
        })
    })
})