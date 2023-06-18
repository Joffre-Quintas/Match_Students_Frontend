import './Button.scss';

interface IButton {
    type?: 'submit' | 'reset' | 'button'
    content: string
}
export default function Button(props: IButton) {
    return <button type={props.type}>{props.content}</button> 
}