System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventBus, _crd, eventBus;

  _export("EventBus", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16bff0NUHdHKJHYZy101sgT", "EventBus", undefined);

      _export("EventBus", EventBus = class EventBus {
        constructor() {
          this.listeners = new Map();
        }

        on(event, fn) {
          if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
          }

          this.listeners.get(event).add(fn);
        }

        off(event, fn) {
          var _this$listeners$get;

          (_this$listeners$get = this.listeners.get(event)) == null ? void 0 : _this$listeners$get.delete(fn);
        }

        emit(event, payload) {
          var _this$listeners$get2;

          (_this$listeners$get2 = this.listeners.get(event)) == null ? void 0 : _this$listeners$get2.forEach(fn => {
            fn(payload);
          });
        }

      });

      _export("eventBus", eventBus = new EventBus());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=767896bb3ac1e1549e4aafbdfabd95391457e9d2.js.map