import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
	selector: 'app-kanban-stats',
	templateUrl: './kanban-stats.component.html',
	styleUrls: ['./kanban-stats.component.scss']
})
export class KanbanStatsComponent {
	public doughnutChart: any;
	public barChart: any;

	ngOnInit() {
		this.doughnutChart = new Chart('doughnutChart', {
			type: 'doughnut',
			data: {
				labels: ['Red', 'Blue', 'Yellow'],
				datasets: [
					{
						label: 'My First Dataset',
						data: [300, 50, 100],
						backgroundColor: [
							'rgb(255, 99, 132)',
							'rgb(54, 162, 235)',
							'rgb(255, 205, 86)'
						],
						hoverOffset: 4
					}
				]
			}
		});
		this.barChart = new Chart('barChart', {
			type: 'bar',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July'
				],
				datasets: [
					{
						label: 'My First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(255, 159, 64, 0.2)',
							'rgba(255, 205, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(201, 203, 207, 0.2)'
						],
						borderColor: [
							'rgb(255, 99, 132)',
							'rgb(255, 159, 64)',
							'rgb(255, 205, 86)',
							'rgb(75, 192, 192)',
							'rgb(54, 162, 235)',
							'rgb(153, 102, 255)',
							'rgb(201, 203, 207)'
						],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	}
}
