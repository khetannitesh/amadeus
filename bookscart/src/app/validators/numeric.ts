import {ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';

export const numeric : ValidatorFn = (control: AbstractControl) : ValidationErrors => {

    let value = +control.value;
    if(isNaN(value)) {
        return {numeric: true};
    }
    return null;
}