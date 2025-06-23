import { Component } from '@angular/core';
import { Carousal } from "../../carousal/carousal";
import { Section } from "../../section/section";
import { Navbar } from "../../navbar/navbar";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Carousal, Section, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
