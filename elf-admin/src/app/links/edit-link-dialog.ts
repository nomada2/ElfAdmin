import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Link, LinkService } from "./link.service";

@Component({
    selector: 'edit-link-dialog',
    templateUrl: 'edit-link-dialog.html',
    styleUrls: ['./edit-link-dialog.css']
})
export class EditLinkDialog {
    editLinkForm: FormGroup;

    constructor(
        public fb: FormBuilder,
        private service: LinkService,
        @Inject(MAT_DIALOG_DATA) public data: Link) { }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm() {
        this.editLinkForm = this.fb.group({
            originUrl: new FormControl(this.data?.originUrl ?? '', [Validators.required]),
            note: new FormControl(this.data?.note ?? ''),
            akaName: new FormControl(this.data?.akaName ?? ''),
            isEnabled: new FormControl(this.data?.isEnabled ?? true),
            ttl: new FormControl(this.data?.ttl ?? 3600)
        })
    }

    submitForm() {
        console.log(this.editLinkForm.value)

        if (this.data) {

        }
        else {
            this.service.add(this.editLinkForm.value).subscribe(() => {
                console.info('added');
            });
        }
    }
}