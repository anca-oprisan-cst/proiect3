import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  buttonDisabled = false;

  persoane: Persoana[] = [
    new Persoana('Anca', 25, 165, 'https://cetateanul.net/wp-content/uploads/2019/11/iarna.jpg')
  ];
  nume: string;
  varsta: number;
  inaltime: number;
  linkPozaProfil: string;
  title: string = 'my first angular application';

  numePrimaPersoana: string;

  ngOnInit() {
    this.numePrimaPersoana = this.persoane[0].nume;
  }

  delete(): void {
    console.log('Button pressed');
  }

  deleteCard(i: number): void {
    console.log('card deleting');
    this.persoane.splice(i, 1);
  }

  adaugaPersoana() {
    this.persoane.push(new Persoana(this.nume, this.varsta, this.inaltime, this.linkPozaProfil));
    this.nume = null;
    this.varsta = null;
    this.inaltime = null;
    this.linkPozaProfil = null;
  }

  varstaChanged(eventValue) {
    //console.log(eventValue);
    this.varsta = eventValue;
    console.log(this.varsta);
  }

  eventEmis() {
    this.numePrimaPersoana = 'Anna';
  }
}

export class Persoana {
  nume: string;
  varsta: number;
  inaltime: number;
  linkPozaProfil: string;


  constructor(nume: string, varsta: number, inaltime: number, link: string) {
    this.nume = nume;
    this.varsta = varsta;
    this.inaltime = inaltime;
    this.linkPozaProfil = link;
  }
}
