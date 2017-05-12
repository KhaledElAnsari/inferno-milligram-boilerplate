import Inferno from 'inferno';
import { expect } from "chai";
import { spy } from "sinon";
import { AboutComponent } from "./about";


describe("About Component Test", () => {
    let div;
    beforeEach(function() {
        div = document.createElement("div");
    });

    it("should render without crash", () => {
        Inferno.render(<AboutComponent />, div);
    });
});