import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sersec } from "../../sersec/sersec";
import { Navbar2 } from '../../navbar2/navbar2';

@Component({
  selector: 'app-services',
  imports: [ Sersec,Navbar2],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

}
