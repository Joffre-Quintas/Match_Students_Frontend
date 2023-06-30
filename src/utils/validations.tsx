import IStudent from '../types/IStudents';
import { regex } from './regex';

function removeMsgError(e: React.FocusEvent<HTMLInputElement>) {
    const parentElement = e.target.parentElement;
    const lastChild = parentElement?.lastChild;

    if (lastChild instanceof HTMLElement && lastChild.classList.contains('error')) {
        parentElement?.removeChild(lastChild);
    }

    e.target.style.border = 'none';
}

function createMsgError(e: React.FocusEvent<HTMLInputElement>, msg: string) {
    const parentElement = e.target.parentElement;
    const lastChild = parentElement?.lastChild;

    if (!(lastChild instanceof HTMLElement) || !lastChild.classList.contains('error')) {
        const errorMsg = document.createElement('div');
        errorMsg.classList.add('error');
        errorMsg.innerHTML = `<p>${msg}</p>`;
        e.target.style.border = '2px solid rgb(243, 75, 75)';
        e.target.style.borderRadius = '4px';
        parentElement?.appendChild(errorMsg);
    }
}

export function validationInput(type:string , e:React.FocusEvent<HTMLInputElement, Element>) {   
    const fieldValue = e.target.value;
    removeMsgError(e)  
    if(fieldValue.trim() == '') {
        createMsgError(e,'Preencha este campo!')
        return 
    }
    switch (type) {
        case 'text':
            removeMsgError(e)
            if(!regex.text.test(fieldValue)){
                createMsgError(e, 'Este campo deve conter apenas letras.')
                return 
            }
            if(fieldValue.length < 8) {
                createMsgError(e, 'Por favor, insira o nome completo.')
                return 
            }
            break;
        case 'email':
            removeMsgError(e)
            if(!regex.email.test(fieldValue)) {
                createMsgError(e,'Formato incorreto')
                return 
            }
            break;
        case 'date':
            removeMsgError(e)
            {
                const date = new Date(fieldValue);
                const dif = Date.now() - date.valueOf(); 
                const year = Math.floor(dif/(1000*60*60*24*365))
                if(year <= 16) {
                    createMsgError(e,'Você precisa ser maior que 16 anos para se cadastrar na plataforma.')
                    return 
                }
            }
            break;
        case 'password':
            removeMsgError(e)
            if(fieldValue.length < 5) {
                createMsgError(e,'Sua senha deve possuir no mínimo 5 caracteres.')
                return 
            }
            break;
        case 'phone':
            removeMsgError(e)
            if(regex.phone.test(fieldValue)) {
                createMsgError(e,'O valor informado deve conter apenas números e o DDD sem o zero.')
                return 
            }
            break;
        case 'RN':
            removeMsgError(e)
            if(regex.RN.test(fieldValue)) {
                createMsgError(e,'Deve conter 8 Números.')
                return 
            }    
    }
}
export function validationSubmit(obj:IStudent) {
    const { completeName, registrationNumber, birthday, phone, period, course, turn, email, password } =  obj;

    if(!completeName.trim() || !registrationNumber.trim() || !birthday || !phone.trim() || !period || !course || !turn || !email.trim() || !password.trim()) {
        alert('Preencha todos os campos!')
        return false
    }
    return true;
}





