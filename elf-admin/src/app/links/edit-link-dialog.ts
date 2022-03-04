import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Link } from "./link.service";

@Component({
    selector: 'edit-link-dialog',
    templateUrl: 'edit-link-dialog.html',
})
export class EditLinkDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Link) { }
}