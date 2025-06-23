import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contsec } from "../../contsec/contsec";
import { Navbar2 } from '../../navbar2/navbar2';


@Component({
  selector: 'app-contactus',
  imports: [Contsec,Navbar2],
  templateUrl: './contactus.html',
  styleUrls: ['./contactus.css']
})
export class Contactus{}


