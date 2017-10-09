import { Component, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "counter-operation-controls",
    templateUrl:"./counter-operation-controls.component.html",
    styleUrls:[]
})
export class CounterOperationControlsComponent {
    @Output() onChanged = new EventEmitter<boolean>();
   
    add() {
        this.onChanged.emit(true);
    }

    subb() {
        this.onChanged.emit(false);
    }
}