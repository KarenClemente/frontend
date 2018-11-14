import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
selector: '[signUpConfirmEqualValidator]',
providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
}]
})

export class ConfirmEqualValidatorDirective implements Validator{

    @Input() signUpConfirmEqualValidator: string;
    
    validate(control: AbstractControl): {[key:string]: any} | null{
        const controlToCompare = control.parent.get(this.signUpConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value){
            return { 'notEqual':true };
        }

        return null;
    }
}