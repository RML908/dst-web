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

export class AuthSignInComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;

  alert: { type: DstAlertType; message: string } = {
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
  ) {
  }

//  Hooks
  ngOnInit() {
    // Create the form
    this.signInForm = this._formBuilder.group({
      user_login: ['DOC3', [Validators.required, Validators.minLength(3)]],
      user_password: ['DOC3', Validators.required],
    },);
  }

  //ToDo Validation and null
  signIn(): void {
    const username = this.signInForm.get('user_login').value;
    const password = this.signInForm.get('user_password').value;
    const redirectURL = this._router.parseUrl(this._router.url).queryParams['redirectURL'] || '/example';
    this._authService.signIn(username, password, redirectURL)
      .subscribe(
        (data) => {
          if (data.id === 3) {
            console.log(data);

          }
        },
        (error) => {
          if (error.status === 401) {
            this.alert = {
              type: 'error',
              message: 'Անվավեր Մուտքանուն և/կամ  գաղտնաբառ'
            };

            // Show the alert
            this.showAlert = true;
          } else {
            this.alert = {
              type: 'error',
              message: 'Տեղի ունեցել սխալ, փորձեք մի փոքր ուշ կամ թարմացրեք հղումը'
            }
          }
        }
      );
  }

  //  signIn():void
  //
  // {
  //   // Return if the form is invalid
  //   if ( this.signInForm.invalid )
  //   {
  //     return;
  //   }
  //
  //   // Disable the form
  //   this.signInForm.disable();
  //
  //   // Hide the alert
  //   this.showAlert = false;
  //
  //   // Sign in
  //
  //   this._authService.signIn(this.signInForm.value)
  //     .subscribe({
  //       // complete:()=>{
  //       //   console.log("complete")
  //       // },
  //       next: (next) => {
  //         console.log(next);
  //
  //         // Set the redirect url.
  //         // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
  //         // to the correct page after a successful sign in. This way, that url can be set via
  //         // routing file and we don't have to touch here.
  //         const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
  //         console.log(redirectURL);
  //         // Navigate to the redirect url
  //         this._router.navigateByUrl(redirectURL);
  //
  //       },
  //     error: ()=>
  //
  //   {
  //     // Re-enable the form
  //     this.signInForm.enable();
  //
  //     // Reset the form
  //     this.signInNgForm.resetForm();
  //
  //     // Set the alert
  //     this.alert = {
  //       type   : 'error',
  //       message: 'Անվավեր Մուտքանուն և/կամ  գաղտնաբառ'
  //     };
  //
  //     // Show the alert
  //     this.showAlert = true;
  //   },
  //
  // });
  // }
}
