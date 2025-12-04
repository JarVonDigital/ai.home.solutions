import {Component, inject, OnInit} from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

declare const grecaptcha: { reset: () => void } | undefined;

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
    message: ['', Validators.required],
    captchaToken: ['', Validators.required]
  });

  captchaToken: string | null = null;
  siteKey = '6Ld9JJArAAAAALdbGP_1k0f0SPiiIDm9UFFltT1A';

  ngOnInit(): void {
    // Setup reCAPTCHA global callback
    (window as any).onCaptchaCallback = (token: string) => this.onCaptchaResolved(token);
    (window as any).onCaptchaExpiredCallback = () => this.onCaptchaExpired();
  }

  onCaptchaResolved(token: string): void {
    this.captchaToken = token;
    this.form.get('captchaToken')?.setValue(token);
  }

  onCaptchaExpired(): void {
    this.resetCaptcha();
  }

  private resetCaptcha(): void {
    this.captchaToken = null;
    this.form.get('captchaToken')?.reset();
    if (typeof grecaptcha !== 'undefined') {
      try {
        grecaptcha.reset();
      } catch (error) {
        console.error('Failed to reset reCAPTCHA:', error);
      }
    }
  }

  onSubmit(): void {
    if (this.form.invalid || !this.captchaToken) {
      this.form.markAllAsTouched();
      return;
    }

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
      this.resetCaptcha();
    }).catch(error => {
      console.error('EmailJS send error:', error);
      alert('Error sending message. Please try again later.');
    });
  }
}
