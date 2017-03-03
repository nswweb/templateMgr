"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.select = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.upload = new core_1.EventEmitter();
        this.usePhone = new core_1.EventEmitter();
        this.usePc = new core_1.EventEmitter();
        this.format = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output()
    ], ToolbarComponent.prototype, "select");
    __decorate([
        core_1.Output()
    ], ToolbarComponent.prototype, "save");
    __decorate([
        core_1.Output()
    ], ToolbarComponent.prototype, "upload");
    __decorate([
        core_1.Output()
    ], ToolbarComponent.prototype, "usePhone");
    __decorate([
        core_1.Output()
    ], ToolbarComponent.prototype, "usePc");
    __decorate([
        core_1.Output()
    ], ToolbarComponent.prototype, "format");
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.css']
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map