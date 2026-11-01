import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonButton,
  IonInput,
  IonLabel,
  IonNote,
} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonList,
    IonButton,
    IonInput,
    IonLabel,
    IonNote,
    FormsModule,
  ],
})
export class Tab1Page {
  
  gastos: { descricao: string; valor: number }[] = [];

  descricao = '';
  valor = 0;

  adicionarGasto(): void {

    if (this.descricao === '' || this.valor <= 0) {
      return;
    }

    this.gastos.push({ descricao: this.descricao, valor: this.valor });
    this.descricao = '';
    this.valor = 0;
  }
}
