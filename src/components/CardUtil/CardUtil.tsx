import { ReactNode } from 'react';
import './CardUtil.scss';

interface ICardUtil {
    children: ReactNode
    title: string
    description: string
}
export default function CardUtil(props: ICardUtil) {
    return(
        <div className='utils_util'>
            <div className='utils_util_icon'>
                {props.children}
            </div>
            <div className='utils_util_utilDescription'>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
} 