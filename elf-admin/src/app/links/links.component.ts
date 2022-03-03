import { Component, OnInit } from '@angular/core';
import { Link, LinkService } from './link.service';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

    links: Link[] = [];

    displayedColumns = ['token', 'originUrl', 'note', 'aka', 'enabled', 'ttl', 'updateTimeUtc'];

    constructor(private service: LinkService) { }

    ngOnInit(): void {
        this.getLinks();
    }

    getLinks(): void {
        this.service.list('', 20, 0)
            .subscribe((links: Link[]) => {
                this.links = links;
            });
    }
}