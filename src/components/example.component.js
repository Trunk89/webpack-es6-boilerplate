export class Example {
    constructor(props, container) {
        this.MESSAGE = container.dataset.message || 'Message not set';
        this.container = container;
        this.props = props;
        this.init();
    }

    init() {
        this.appendMessage();
    }

    appendMessage() {
        this.container.append(this.MESSAGE);
    }
}