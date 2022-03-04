import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MostRequestedLinkCount, ReportService, RequestTrack } from './report.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
    isLoading = false;

    displayedColumns: string[] = ['fwToken', 'note', 'userAgent', 'ipAddress', 'requestTimeUtc'];
    dataSource: MatTableDataSource<RequestTrack> = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private service: ReportService) {
    }

    ngOnInit(): void {
        this.getRecentRequests();
        this.getMostRequestedLinksPastMonth();
    }

    getMostRequestedLinksPastMonth() {
        this.isLoading = true;
        this.service.mostRequestedLinksPastMonth().subscribe((result: MostRequestedLinkCount[]) => {
            this.isLoading = false;
            // TODO
        })
    }

    getRecentRequests() {
        this.isLoading = true;

        this.service.recentRequests().subscribe((result: RequestTrack[]) => {
            this.isLoading = false;
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
        })
    }
}