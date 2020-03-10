import { COMPONENTS_CONFIG } from '../constants/components.config';
import { COMPONENTS } from '../constants/components.const';
import { ComponentService } from '../services/components.service';

export class ComponentInitialiser {
    constructor() {
        this.initialiseComponents(document);

        document.addEventListener('dom-change', (event) => {
            this.initialiseComponents(event.detail);
        });
    }

    initialiseComponents(doc) {
        COMPONENTS_CONFIG.forEach((component) => {
            if (!ComponentService.getInitialisedComponent(component.name)) {
                ComponentService.removeInitialisedComponents(component.name)
            }

            Array.from(doc.querySelectorAll(component.props.selector)).forEach(element => {
                if (!ComponentService.getInitialisedComponent(component.name).includes(element)) {
                    ComponentService.addInitialisedComponent(component.name, element);
                    ComponentService.addComponent(new COMPONENTS[component.name](component.props, element));
                }
            });
        });
    }
}