import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Link, LinkService, PagedLinkResult } from './link.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

    isLoading = false;
    totalRows = 0;
    pageSize = 15;
    currentPage = 0;
    pageSizeOptions: number[] = [5, 10, 15, 20, 50, 100];

    displayedColumns: string[] = ['fwToken', 'originUrl', 'note', 'akaName', 'isEnabled', 'ttl', 'updateTimeUtc', 'action', 'manage'];
    dataSource: MatTableDataSource<Link> = new MatTableDataSource();;

    constructor(private service: LinkService) { }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit(): void {
        this.getLinks();
    }

    getLinks(): void {
        this.isLoading = true;

        this.service.list(this.pageSize, this.currentPage * this.pageSize, '')
            .subscribe((result: PagedLinkResult) => {
                this.isLoading = false;

                this.dataSource = new MatTableDataSource(result.links);

                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;

                setTimeout(() => {
                    this.paginator.pageIndex = this.currentPage;
                    this.paginator.length = result.totalRows;
                });
            });
    }

    checkLink(link: Link): void {
        // TODO
    }

    deleteLink(id: number): void {
        // TODO
    }

    pageChanged(event: PageEvent) {
        console.log({ event });
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex;
        this.getLinks();
    }
}