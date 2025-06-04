System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EntityManager, _crd;

  _export("EntityManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "996c8A7bEFAQ7dHt8vI+6KI", "EntityManager", undefined);

      _export("EntityManager", EntityManager = class EntityManager {
        constructor() {
          this.nextEntityId = 0;
          this.components = new Map();
        }

        createEntity() {
          const entityId = this.nextEntityId++;
          return entityId;
        }

        addEcsComponent(entityId, component, componentType) {
          var _this$components$get;

          if (!this.components.has(componentType)) {
            this.components.set(componentType, new Map());
          }

          (_this$components$get = this.components.get(componentType)) == null ? void 0 : _this$components$get.set(entityId, component);
        }

        getEntityWithComponent(componentType) {
          var _this$components$get2;

          let entityWithComponent = [];
          (_this$components$get2 = this.components.get(componentType)) == null ? void 0 : _this$components$get2.forEach((component, entityId) => {
            entityWithComponent.push(entityId);
          });
          return entityWithComponent;
        }

        getEcsComponent(entityId, componentType) {
          var _this$components$get3;

          return ((_this$components$get3 = this.components.get(componentType)) == null ? void 0 : _this$components$get3.get(entityId)) || null;
        }

        removeEcsComponent(entityId, componentType) {
          var _this$components$get4;

          (_this$components$get4 = this.components.get(componentType)) == null ? void 0 : _this$components$get4.delete(entityId);
        }

        hasEcsComponent(entityId, componentType) {
          var _this$components$get$, _this$components$get5;

          return (_this$components$get$ = (_this$components$get5 = this.components.get(componentType)) == null ? void 0 : _this$components$get5.has(entityId)) != null ? _this$components$get$ : false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f5b6f6144ad3f8cd4bf3a6db44d0965734e584a3.js.map