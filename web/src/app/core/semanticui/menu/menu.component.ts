import { Component, ElementRef, forwardRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import '../../../../../semantic-ui/components/popup.js'

class MenuItem {
    name: String;
    children: MenuItem[];
    constructor(name: String, children: MenuItem[]) {
        this.name = name;
        this.children = children;
    }
}

let deomData = new MenuItem('模板', []);

@Component({
    selector: 'bw-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
    @Input() title: MenuItem;
    @Output() menu_click = new EventEmitter();

    
    constructor(private element: ElementRef) { }

    // ****************override AfterViewInit***************
    /**
     * Lifecycle hook that is called after every check of a component's view.
     */
    ngAfterViewInit() {

    }
    // ****************override AfterViewInit***************


}