import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: []
})
export class ProtectedComponent implements OnInit {

  profile: any;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    if (this._authService.userProfile) {
      this.profile = this._authService.userProfile;
    } else {
      this._authService.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
