import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {}

  whatsapp(): void {
    const url = "https://wa.me/5585996112718?text=Ol%C3%A1!%20Vim%20do%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o.";
    this.router.navigate([url]);
  }
}
