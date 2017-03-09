import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var ace: any;

@Component({
    selector: 'bw-ace',
    template: '<div class="ace-editor"></div>',
    styleUrls: ['./ace.component.css']
})
export class AceComponent implements ControlValueAccessor, AfterViewInit {
    constructor(private element: ElementRef) { }
    private editor: any;
    private _viewValue: string;
    private _onChange = (_: any) => { };
    private _onTouched = () => { };

    // ****************override ControlValueAccessor***************
    /**
     * Write a new value to the element.
     */
    writeValue(obj: string): void {
        this._viewValue = obj || "";
        if (this.editor) {
            this.editor.getSession().setValue(this._viewValue);
        }
    }
    /**
     * Set the function to be called when the control receives a change event.
     */
    registerOnChange(fn: (_: any) => {}): void {
        this._onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn: () => {}): void {
        this._onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void {

    }

    // ****************override ControlValueAccessor***************
    // ****************override AfterViewInit***************
    /**
     * Lifecycle hook that is called after every check of a component's view.
     */
    ngAfterViewInit() {
        if (!ace) {
            console.error("No ace found.");
            return;
        }
        let editorElement = this.element.nativeElement.querySelector(".ace-editor");
        this.editor = ace.edit(editorElement);

       // this.setEditor(this.options, true);

        this.editor.on("change", (e: any) => {
            let val = this.editor.getValue();
            this._viewValue = val;
            this._onChange(val);
        });
    }
    // ****************override AfterViewInit***************


}