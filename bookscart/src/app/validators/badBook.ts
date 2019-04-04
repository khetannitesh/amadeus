import {ValidatorFn, AbstractControl, ValidationErrors, FormGroup} from '@angular/forms';

export const badBook : ValidatorFn = (group: FormGroup) : ValidationErrors => {

    let title = group.get('title').value;
    let author = group.get('author').value;

    if(title == 'One Indian Girl' && author == 'Chetan Bhagat') {
        return {badBook: true};
    }
    return null;
}