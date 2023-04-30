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
    private _router: Router,
  ) {
  }

//  Hooks
  ngOnInit() {
    // Create the form
    this.signInForm = this._formBuilder.group({
      user_login: ['DOC3', [Validators.required, Validators.minLength(3)]],
      user_password: ['DOC3', Validators.required],
    });
  }

  //ToDo Validation and null
  // signIn(): void {
  //   this.signInForm.markAsTouched();
  //
  //   if (this.signInForm.valid) {
  //     const username = this.signInForm.get('user_login').value;
  //     const password = this.signInForm.get('user_password').value;
  //
  //     this.showAlert = true;
  //     this._authService.signIn(username, password)
  //       .subscribe(
  //         () => {
  //           const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
  //           console.log("redirectURl===",redirectURL);
  //           if(redirectURL){
  //            this._router.navigate([redirectURL]);
  //           }
  //           this.alert = {type: 'success', message: 'Մուտք'};
  //         },
  //         (error) => {
  //           if (error.status === 401 || error.status === 422) {
  //             this.alert = {
  //               type: 'error',
  //               message: 'Անվավեր Մուտքանուն և/կամ  գաղտնաբառ'
  //             };
  //             this.signInForm.reset();
  //           } else {
  //             this.alert = {
  //               type: 'error',
  //               message: 'Տեղի ունեցել սխալ, փորձեք մի փոքր ուշ կամ թարմացրեք հղումը'
  //             };
  //             this.showAlert = true;
  //           }
  //         }
  //       )
  //       .add(() => {
  //         this.showAlert = false;
  //       });
  //   }
  // }


  signIn(): void {

    if (this.signInForm.invalid)
    {
      return;
    }
    this.signInForm.disable()
      // this.signInForm.get('user_login').value;
      // this.signInForm.get('user_password').value;
      this.showAlert = false;
      this._authService.signIn(this.signInForm.value)
        .subscribe(
          () => {
            const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

            this.alert = {type: 'success', message: 'Մուտք'}
            this._router.navigateByUrl(redirectURL)

          },

          (response) => {
            this.signInForm.enable();
            this.signInNgForm.resetForm();

            if (response.status === '401' || 422) {
              this.alert = {
                type: 'error',
                message: 'Անվավեր մուտքանուն և/կամ  գաղտնաբառ'
              };
              this.signInForm.reset();
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

}
