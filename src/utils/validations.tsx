import IStudent from '../types/IStudents';
import { regex } from './regex';

export function validationInput(type:string , e:React.FocusEvent<HTMLInputElement, Element>) {
    const fieldValue = e.target.value;
    if(fieldValue.trim() == '') {
        console.log("Preencha este campo!") 
        return "Preencha este campo!"
    }
    switch (type) {
        case 'text':
            if(fieldValue.length <= 8) {
                console.log('Por favor, insira o nome completo.')
                return 'Por favor, insira o nome completo.'
            }
            if(!regex.text.test(fieldValue)){
                console.log("Este campo deve conter apenas letras.") 
                return "Este campo deve conter apenas letras."
            }
            break;
        case 'email':
            if(!regex.email.test(fieldValue)) {
                console.log('Formato incorreto')
                return 'Formato incorreto'
            }
            break;
        case 'date':
            {
                const date = new Date(fieldValue);
                const dif = Date.now() - date.valueOf(); 
                const year = Math.floor(dif/(1000*60*60*24*365))
                if(year <= 16) {
                    console.log("Você precisa ser maior que 16 anos para se cadastrar na plataforma")
                    return "Você precisa ser maior que 16 anos para se cadastrar na plataforma."
                }
            }
            break;
        case 'password':
            if(fieldValue.length < 5) {
                console.log('Sua senha deve possuir no mínimo 5 caracteres.')
                return 'Sua senha deve possuir no mínimo 5 caracteres.'
            }
            break;
        case 'phone':
            if(regex.phone.test(fieldValue)) {
                console.log('O valor informado deve conter apenas números e o DDD sem o zero.')
                return 'O valor informado deve conter apenas números e o DDD sem o zero.'
            }
            break;
        case 'RN':
            if(regex.RN.test(fieldValue)) {
                console.log('Deve conter 8 dígitos')
                return 'Deve conter 8 dígitos.'
            }    
    }
}
export function validationSubmit(obj:IStudent) {
    const { completeName, registrationNumber, birthday, phone, period, course, turn, email, password } =  obj;

    if(!completeName.trim() || !registrationNumber.trim() || !birthday || !phone.trim() || !period || !course || !turn || !email.trim() || !password.trim()) {
        console.log('Preencha todos os campos!')
        return false
    }
    return true;
}





