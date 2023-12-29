import { Component } from '@angular/core';
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[myCustomValidator][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MyCustomValidatorDirective, multi: true }]
})
export class MyCustomValidatorDirective implements Validator {
    @Input()
    myCustomValidator!: string;
  
    validate(control: AbstractControl): { [key: string]: any } | null {
    const email: string = control.value;
    if (email && !/^[a-zA-Z]+$/.test(email)) {


        return { 'myCustomvalidator': true };
      }
return null;
}}