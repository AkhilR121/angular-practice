import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// import { UserModel } from '../../../models/changeDetectoin-model';

@Component({
	selector: 'app-child-component',
	standalone: true,
	imports: [],
	templateUrl: './child-component.component.html',
	styleUrl: './child-component.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponentComponent {
	@Input() user: any;
}
