import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService, RequestTrack } from './report.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
    isLoading = false;

    displayedColumns: string[] = ['fwToken', 'note', 'userAgent', 'ipAddress', 'requestTimeUtc'];
    dataSource: MatTableDataSource<RequestTrack> = new MatTableDataSource();

    constructor(private service: ReportService) {
    }

    ngOnInit(): void {
        this.getRecentRequests();
    }

    getRecentRequests() {
        this.isLoading = true;

        this.service.recentRequests().subscribe((result: RequestTrack[]) => {
            this.isLoading = false;
            this.dataSource = new MatTableDataSource(result);
        })
    }
}