import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Preferences} from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class DatosServiceService {
  private qrResultStringSource = new BehaviorSubject<string>('');
  qrResultString$ = this.qrResultStringSource.asObservable();

  async setQrResultString(value: string) {
    this.qrResultStringSource.next(value);

    // Guarda el valor en capacitor
    await Preferences.set({ key: 'qrResultString', value });
  }
  constructor() { }
}