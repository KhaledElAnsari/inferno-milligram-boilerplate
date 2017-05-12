import Inferno from 'inferno';
import { expect } from "chai";
import { spy, stub } from "sinon";
import { MainComponent } from "./main";


describe("Main Component Test", () => {
    let div;
    beforeEach(function() {
        div = document.createElement("div");
    });

    it("should render without crash", () => {
        Inferno.render(<MainComponent />, div);
    });

    it("should be no default props", () => {
        const wrapper = Inferno.render(<MainComponent />, div);
        expect(Object.keys(wrapper.props).length).to.equal(0);
    });

    it("should stub window.alert method", () => {
        const wrapper = Inferno.render(<MainComponent />, div);
        stub(window, "alert");
        wrapper.testAlert();
    });
});