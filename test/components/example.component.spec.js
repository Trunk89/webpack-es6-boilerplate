import { Example } from '../../src/components/example.component';

describe("Example Component", function () {
let component, element;
const fixture = `<div class="example" data-message="custom message"></div>`;
const fixtureEmpty = `<div class="example"></div>`;

    describe("When Example Component is loaded with specified message", function () {
        
        beforeEach(() => {
            let elem = document.createElement('div');
            elem.innerHTML = fixture;
            element = elem.querySelector('.example');
            document.body.append(element);
            component = new Example({}, element);
        });

        it("Then MESSAGE is defined as custom message", function () {
            expect(component.MESSAGE).toEqual('custom message');
        });

        it("And container contains the correct html", function () {
            expect(component.container.outerHTML).toBe('<div class="example" data-message="custom message">custom message</div>');
        });

        it("And props are defiend", function () {
            expect(component.props).not.toBe(undefined);
        });

    });

    describe("When Example Component is loaded without specified message", function () {
        
        beforeEach(() => {
            let elem = document.createElement('div');
            elem.innerHTML = fixtureEmpty;
            element = elem.querySelector('.example');
            document.body.append(element);
            component = new Example({}, element);
        });

        it("Then MESSAGE is set to default text Message not set", function () {
            expect(component.MESSAGE).toEqual('Message not set');
        });

        it("And container contains the correct html", function () {
            expect(component.container.outerHTML).toBe('<div class="example">Message not set</div>');
        });

        it("And props are defiend", function () {
            expect(component.props).not.toBe(undefined);
        });

    });
});