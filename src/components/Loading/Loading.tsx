import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading">
            <p className='loading_text letter1'>L</p>
            <p className='loading_text letter2'>o</p>
            <p className='loading_text letter3'>a</p>
            <p className='loading_text letter4'>d</p>
            <p className='loading_text letter5'>i</p>
            <p className='loading_text letter6'>n</p>
            <p className='loading_text letter7'>g</p>
            <div className='loading_dot dot1'></div>
            <div className='loading_dot dot2'></div>
            <div className='loading_dot dot3'></div>
        </div>
    )
}