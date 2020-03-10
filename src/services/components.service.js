let instances = [];
let initialisedComponents = {};

export class ComponentService {
    static addComponent(instance) {
        instances.push(instance);
    }

    static returnAllActiveComponents() {
        return instances;
    }

    static returnComponent(instance) {
        return instances.find((element) => {
            return element instanceof instance;
        });
    }

    static deleteInitialisedComponents() {
        initialisedComponents = {};
    }

    static addInitialisedComponent(component, element) {
        initialisedComponents[component].push(element)
    }

    static getInitialisedComponent(component) {
        return initialisedComponents[component];
    }

    static removeInitialisedComponents(component) {
        initialisedComponents[component] = [];
    }
}