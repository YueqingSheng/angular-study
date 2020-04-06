import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  // username = new FormControl();
  // registerForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  // });
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    //   this.username.valueChanges.subscribe((value) => {
    //     console.log('Username:', value);
    //   });
    //   this.username.setValue('stevenSheng');
    // }
    this.registerForm.statusChanges.subscribe((status) => {
      console.log('Status:', status);
    });
    // this.registerForm.setValue({
    //   username: 'steven',
    //   password: '111111111111',
    // });
  }
  onSubmit(): void {
    console.log('submit', this.registerForm.value);
  }
}
