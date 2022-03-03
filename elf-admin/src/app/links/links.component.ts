import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Link, LinkService } from './link.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

    isLoading = false;
    totalRows = 0;
    pageSize = 5;
    currentPage = 0;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    displayedColumns: string[] = ['fwToken', 'originUrl', 'note', 'akaName', 'isEnabled', 'ttl', 'updateTimeUtc', 'action', 'manage'];
    dataSource: MatTableDataSource<Link> = new MatTableDataSource();;

    constructor(private service: LinkService) { }

    @ViewChild(MatSort) sort: MatSort;

    ngOnInit(): void {
        this.getLinks();
    }

    getLinks(): void {
        this.isLoading = true;

        this.service.list(20, 0, 'az')
            .subscribe((links: Link[]) => {
                this.isLoading = false;
                
                this.dataSource = new MatTableDataSource(links);
                this.dataSource.sort = this.sort;
            });
    }

    checkLink(link: Link): void {
        // TODO
    }

    deleteLink(id: number): void {
        // TODO
    }
}