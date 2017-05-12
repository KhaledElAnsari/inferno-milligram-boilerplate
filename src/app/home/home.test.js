import Inferno from 'inferno';
import { expect } from "chai";
import { spy } from "sinon";
import { HomeComponent } from "./home";


describe("Home Component Test", () => {
    let div;
    beforeEach(function() {
        div = document.createElement("div");
    });

    it("should render without crash", () => {
        Inferno.render(<HomeComponent />, div);
    });
});