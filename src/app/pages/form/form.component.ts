import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  //declare form object
  feedbackForm!: FormGroup

  //inject formBuilder for easier construction
  constructor(private fb:FormBuilder) {}

  //initialization
  ngOnInit(): void {
      this.feedbackForm = this.fb.group({
        //name field, required
        name:['',Validators.required],
        //email
        email:['',[Validators.email,Validators.required]],
        //msg
        message:['',Validators.required]
      });
  }
  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('feedback submitted',this.feedbackForm.value);
      alert('feedback submit successful');
      //reset after submission
      this.feedbackForm.reset();
    }else {
      this.feedbackForm.markAllAsTouched();
    }
  }
}
