import { Component } from '@angular/core';
import { Abtsection } from "../../abtsection/abtsection";
import { Navbar2 } from '../../navbar2/navbar2';

@Component({
  selector: 'app-aboutus',
  imports: [Abtsection,Navbar2],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {

}
