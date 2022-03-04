import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { LinkTrackingDateCount, MostRequestedLinkCount, ReportService, RequestTrack } from './report.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
    isLoading = false;

    pipe = new DatePipe('en-US');
    displayedColumns: string[] = ['fwToken', 'note', 'userAgent', 'ipAddress', 'requestTimeUtc'];
    dataSource: MatTableDataSource<RequestTrack> = new MatTableDataSource();

    pastWeekChartData: ChartConfiguration['data'] = {
        datasets: [],
        labels: []
    };

    pastWeekChartOptions: ChartConfiguration['options'] = {
        plugins: {
            legend: { display: false }
        }
    };

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
    
    constructor(private service: ReportService) {
    }

    ngOnInit(): void {
        this.getRecentRequests();
        this.getTrackingCountPastWeek();
        this.getMostRequestedLinksPastMonth();
    }

    getMostRequestedLinksPastMonth() {
        this.isLoading = true;
        this.service.mostRequestedLinksPastMonth().subscribe((result: MostRequestedLinkCount[]) => {
            this.isLoading = false;
            // TODO
        })
    }

    getTrackingCountPastWeek() {
        this.isLoading = true;
        this.service.trackingCountPastWeek().subscribe((result: LinkTrackingDateCount[]) => {
            this.isLoading = false;

            const trackingDates = [];
            const requestCounts: number[] = [];
            for (let idx in result) {
                if (result.hasOwnProperty(idx)) {
                    trackingDates.push(this.pipe.transform(result[idx].trackingDateUtc, 'MM/dd'));
                    requestCounts.push(result[idx].requestCount);
                }
            }

            this.pastWeekChartData.datasets = [{
                data: requestCounts
            }];

            this.pastWeekChartData.labels = trackingDates;

            this.chart?.update();
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