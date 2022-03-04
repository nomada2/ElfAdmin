import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Link } from "./link.service";

@Component({
    selector: 'share-dialog',
    templateUrl: 'share-dialog.html',
})
export class ShareDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Link) { }
}