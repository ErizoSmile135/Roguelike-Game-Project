System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewComponent, EntityManager, _crd;

  function _reportPossibleCrUseOfViewComponent(extras) {
    _reporterNs.report("ViewComponent", "../components/core/ViewComponent", _context.meta, extras);
  }

  _export("EntityManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ViewComponent = _unresolved_2.ViewComponent;
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

        addComponent(entityId, component, componentType) {
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

        getComponent(entityId, componentType) {
          var _this$components$get3;

          return ((_this$components$get3 = this.components.get(componentType)) == null ? void 0 : _this$components$get3.get(entityId)) || null;
        }

        removeComponent(entityId, componentType) {
          var _this$components$get4;

          (_this$components$get4 = this.components.get(componentType)) == null ? void 0 : _this$components$get4.delete(entityId);
        }

        hasComponent(entityId, componentType) {
          var _this$components$get$, _this$components$get5;

          return (_this$components$get$ = (_this$components$get5 = this.components.get(componentType)) == null ? void 0 : _this$components$get5.has(entityId)) != null ? _this$components$get$ : false;
        }

        removeEntity(id) {
          var _view$node;

          const view = this.getComponent(id, _crd && ViewComponent === void 0 ? (_reportPossibleCrUseOfViewComponent({
            error: Error()
          }), ViewComponent) : ViewComponent);

          if (view != null && (_view$node = view.node) != null && _view$node.isValid) {
            view.node.destroy();
          }

          this.components.forEach(component => {
            component.delete(id);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=31861c57006b535fdd03345d961f6a7f7259b060.js.map