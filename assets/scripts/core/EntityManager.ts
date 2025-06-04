import { ViewComponent } from "../components/ViewComponent";

type ComponentClass<T> = { new (...args: any[]): T };

export class EntityManager {
    
    private nextEntityId: number = 0;
    private components: Map<ComponentClass<any>, Map<number, any>> = new Map();

    createEntity(): number{
        const entityId = this.nextEntityId++;
        return entityId;
    }

    addComponent<T>(entityId: number, component: T, componentType: ComponentClass<T>){
        if (!this.components.has(componentType)){
            this.components.set(componentType, new Map());
        }
        this.components.get(componentType)?.set(entityId, component);
    }

    getEntityWithComponent<T>(componentType: ComponentClass<T>): number[]{
        let entityWithComponent: number[] = [];
        this.components.get(componentType)?.forEach((component, entityId) => {
            entityWithComponent.push(entityId);
        })  
        return entityWithComponent;
    }
       
    getComponent<T>(entityId: number, componentType: ComponentClass<T>): T | null{
        return this.components.get(componentType)?.get(entityId) || null;
    }

    removeComponent<T>(entityId: number, componentType: ComponentClass<T>){
        this.components.get(componentType)?.delete(entityId);
    }

    hasComponent<T>(entityId: number, componentType: ComponentClass<T>): boolean {
        return this.components.get(componentType)?.has(entityId) ?? false;
    }

    removeEntity(id: number){
        const view = this.getComponent(id, ViewComponent);
        if (view?.node?.isValid) {
          view.node.destroy();
        }
        
        this.components.forEach((component) => {
            component.delete(id);
        });
    }
}

