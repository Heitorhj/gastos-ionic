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
} from '@ionic/angular';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonList,
    IonButton,
    IonInput,
    FormsModule,
    ExploreContainerComponent,
  ],
})
export class Tab1Page {
  gastos = [{ descricao: 'Almoço', valor: 25 }];

  descricao = '';
  valor = 0;

  adicionarGasto(): void {
    this.gastos.push({ descricao: this.descricao, valor: this.valor });
  }
}
