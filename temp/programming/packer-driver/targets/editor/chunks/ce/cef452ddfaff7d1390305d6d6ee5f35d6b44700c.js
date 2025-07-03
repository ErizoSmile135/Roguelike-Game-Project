System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventBus, _crd, eventBus;

  function _reportPossibleCrUseOfDamage(extras) {
    _reporterNs.report("Damage", "../components/Damage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosition(extras) {
    _reporterNs.report("Position", "../components/Position", _context.meta, extras);
  }

  _export("EventBus", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16bff0NUHdHKJHYZy101sgT", "EventBus", undefined);

      _export("EventBus", EventBus = class EventBus {
        constructor() {
          this.listeners = {};
        }

        // Подписка
        on(event, fn) {
          if (!this.listeners[event]) {
            this.listeners[event] = new Set();
          }

          this.listeners[event].add(fn);
        } // Отписка


        off(event, fn) {
          var _this$listeners$event;

          (_this$listeners$event = this.listeners[event]) == null ? void 0 : _this$listeners$event.delete(fn);
        } // Испускание


        emit(event, payload) {
          var _this$listeners$event2;

          (_this$listeners$event2 = this.listeners[event]) == null ? void 0 : _this$listeners$event2.forEach(fn => fn(payload));
        }

      });

      _export("eventBus", eventBus = new EventBus());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cef452ddfaff7d1390305d6d6ee5f35d6b44700c.js.map