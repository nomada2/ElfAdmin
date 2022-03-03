import { Component, OnInit } from '@angular/core';
import { Link, LinkService } from './link.service';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

    links: Link[] = [];

    displayedColumns = ['fwToken', 'originUrl', 'note', 'akaName', 'isEnabled', 'ttl', 'updateTimeUtc'];

    constructor(private service: LinkService) { }

    ngOnInit(): void {
        this.getLinks();
    }

    getLinks(): void {
        this.service.list(20, 0, 'az')
            .subscribe((links: Link[]) => {
                this.links = links;
            });
    }
}