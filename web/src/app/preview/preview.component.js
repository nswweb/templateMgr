"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var previewComponent = (function () {
    function previewComponent() {
        this._template = '';
    }
    Object.defineProperty(previewComponent.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (value) {
            this._template = value;
            var iframe = document.querySelector('[name=previewer]');
            if (iframe) {
                iframe.contentWindow.document.querySelector('body').innerHTML = "<div>" + this._template + "</div>"; //  this._template;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], previewComponent.prototype, "template");
    previewComponent = __decorate([
        core_1.Component({
            selector: 'preview',
            styleUrls: ['./preview.component.css'],
            templateUrl: './preview.component.html'
        })
    ], previewComponent);
    return previewComponent;
}());
exports.previewComponent = previewComponent;
//# sourceMappingURL=preview.component.js.map