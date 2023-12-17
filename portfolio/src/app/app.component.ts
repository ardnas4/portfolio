import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationBarHeaderComponent } from "../header/navigation-bar-header/navigation-bar-header.component";
import { FooterComponent } from "../footer/footer.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavigationBarHeaderComponent, FooterComponent, HeroSectionComponent]
})
export class AppComponent {
}
