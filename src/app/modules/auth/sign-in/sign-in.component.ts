import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgForm, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {DstAlertType} from "../../../../@dst/compnents/alert";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/auth/auth.service";
import {DstAnimations} from "../../../components/animations";

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: DstAnimations
})

export class AuthSignInComponent implements OnInit
{
  @ViewChild('signInNgForm') signInNgForm: NgForm;

  alert: {type: DstAlertType; message: string} = {
    type: 'success',
    message: ''
  };

  signInForm: UntypedFormGroup;
  showAlert: boolean = false;

   constructor(
     private _activatedRoute: ActivatedRoute,
     private _authService: AuthService,
     private _formBuilder: UntypedFormBuilder,
     private _router: Router
  )
  {
  }

//  Hooks
   ngOnInit(){
     // Create the form
     this.signInForm = this._formBuilder.group({
       login     : ['DOC3', [Validators.required, Validators.minLength(3)]],
       password  : ['DOC3', Validators.required],
       rememberMe: ['']
     });
  }

  signIn(): void
  {
    // Return if the form is invalid
    if ( this.signInForm.invalid )
    {
      return;
    }

    // Disable the form
    this.signInForm.disable();

    // Hide the alert
    this.showAlert = false;

    // Sign in
    this._authService.signIn(this.signInForm.value)
      .subscribe(
        () => {

          // Set the redirect url.
          // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
          // to the correct page after a successful sign in. This way, that url can be set via
          // routing file and we don't have to touch here.
          const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

          // Navigate to the redirect url
          this._router.navigateByUrl(redirectURL);

        },
        () => {
          // Re-enable the form
          this.signInForm.enable();

          // Reset the form
          this.signInNgForm.resetForm();

          // Set the alert
          this.alert = {
            type   : 'error',
            message: 'Անվավեր Մուտքանուն և/կամ  գաղտնաբառ'
          };

          // Show the alert
          this.showAlert = true;
        }
      );
  }
}
