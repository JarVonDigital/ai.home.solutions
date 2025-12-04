import {Component, inject, OnInit} from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  captchaToken: string | null = null;
  siteKey = '6Ld9JJArAAAAALdbGP_1k0f0SPiiIDm9UFFltT1A';

  ngOnInit(): void {
    // Setup reCAPTCHA global callback
    (window as any).onCaptchaCallback = (token: string) => this.onCaptchaResolved(token);
  }

  onCaptchaResolved(token: string): void {
    this.captchaToken = token;
  }

  onSubmit(): void {
    const templateParams = {
      title: '',
      name: this.form.value.firstName +' '+ this.form.value.lastName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      message: this.form.value.message,
      'g-recaptcha-response': this.captchaToken
    };

    emailjs.send(
      'AI-Home-Solutions-01',
      'template_51n0wro',
      templateParams,
      'Vcl_hz2J97AlUC1RL'
    ).then(() => {
      alert('Message sent successfully!');
      this.form.reset();
      this.captchaToken = null;
    }).catch(error => {
      console.error('EmailJS send error:', error);
      alert('Error sending message. Please try again later.');
    });
  }
}
