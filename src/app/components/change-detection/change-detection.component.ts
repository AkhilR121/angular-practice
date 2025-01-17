import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponentComponent } from './ChildComponent/child-component.component';
import { UserModel } from '../../models/changeDetectoin-model';

@Component({
	selector: 'app-change-detection',
	standalone: true,
	imports: [ChildComponentComponent],
	templateUrl: './change-detection.component.html',
	styleUrl: './change-detection.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
	user: UserModel = {
		firstName: "Shib",
		lastName: "dev"
	}

	changeFirstName() {
		// this.user.firstName = "Shibashis"
		this.user = {
			firstName: "Shibashis",
			lastName: "dev"
		}
	}
}
