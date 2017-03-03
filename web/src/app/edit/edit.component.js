"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EditComponent = (function () {
    function EditComponent() {
        this.mode = "html";
        this.value = '';
        this.valueChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(EditComponent.prototype, "editValue", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.value = value;
            this.valueChanged.emit(this.value);
        },
        enumerable: true,
        configurable: true
    });
    EditComponent.prototype.ngOnInit = function () {
        this.aceOption = {
            readonly: false,
            theme: 'twilight',
            onLoaded: function (editor) {
                editor.$blockScrolling = Infinity;
                editor.setOptions({
                    minLines: 15,
                    maxLines: 250
                });
            },
            onChange: function (e) {
            }
        };
    };
    __decorate([
        core_1.Output()
    ], EditComponent.prototype, "valueChanged");
    __decorate([
        core_1.Input()
    ], EditComponent.prototype, "editValue");
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        })
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map