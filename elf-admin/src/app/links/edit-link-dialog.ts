import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Link } from "./link.service";

@Component({
    selector: 'edit-link-dialog',
    templateUrl: 'edit-link-dialog.html',
})
export class EditLinkDialog {
    editLinkForm: FormGroup;

    constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Link) { }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm() {
        this.editLinkForm = this.fb.group({
            originUrl: new FormControl('', [Validators.required]),
            note: new FormControl('')
        })
    }

    submitForm() {
        console.log(this.editLinkForm.value)
    }
}