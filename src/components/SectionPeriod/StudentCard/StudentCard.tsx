import { AiOutlinePlusCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {useState} from 'react';
import IStudent from "../../../types/IStudents";

import './StudentCard.scss';

export default function StudentCard(props: IStudent) {
    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(current => !current)
    }

    return(
        <div className={`period_listStudents_cardStudent ${show == true ?'show': ''}`}>
            <div className='period_listStudents_cardStudent_defaultView'>
              <div>
                <h6>Nome Completo</h6>
                <p>{props.obj.completeName}</p>
              </div>
              <div>
                <h6>Turno</h6>
                <p>{props.obj.turn}</p>
              </div>
              <div>
                <h6>Pode mentorar?</h6>
                <p>{props.obj.isAvaliable ? 'Sim' : 'Não'}</p>
              </div>
              <MdOutlineKeyboardArrowDown className={show == false ? '': 'rotate'} onClick={() => handleShow()}/>
            </div>
            {props.obj.knowledge && props.obj.knowledge.length !== 0 && (
              <div className='period_listStudents_cardStudent_interest'>
                <h6>Conhecimento em</h6>
                <div className='period_listStudents_cardStudent_interest_carousselFlags'>
                  {props.obj.knowledge.map((tutor: string, index: number) => (
                    <p
                      key={index}
                      className='period_listStudents_cardStudent_interest_carousselFlags_flags'
                    >
                      {tutor}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {props.obj.interest.length !== 0 && (
              <div className='period_listStudents_cardStudent_interest'>
                <h6>Interesses</h6>
                <div className='period_listStudents_cardStudent_interest_carousselFlags'>
                  {props.obj.interest.map((interest: string, index: number) => (
                    <p
                      key={index}
                      className='period_listStudents_cardStudent_interest_carousselFlags_flags'
                    >
                      {interest}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {props.obj.tutor && props.obj.tutor.length !== 0 && (
              <div className='period_listStudents_cardStudent_interest'>
                <h6>Mentor</h6>
                <div className='period_listStudents_cardStudent_interest_carousselFlags'>
                  {props.obj.tutor.map((tutor: string, index: number) => (
                    <p
                      key={index}
                      className='period_listStudents_cardStudent_interest_carousselFlags_flags'
                    >
                      {tutor}
                    </p>
                  ))}
                </div>
              </div>
            )}
            
            {props.obj.student && props.obj.student.length !== 0 && (
              <div className='period_listStudents_cardStudent_interest'>
                <h6>Mentorado por</h6>
                <div className='period_listStudents_cardStudent_interest_carousselFlags'>
                  {props.obj.student.map((studentName: string, index: number) => (
                    <p
                      key={index}
                      className='period_listStudents_cardStudent_interest_carousselFlags_flags'
                    >
                      {studentName}
                    </p>
                  ))}
                </div>
              </div>
            )}
            <div className='period_listStudents_cardStudent_lastSection'>
              <div className='lastSection_contact'>
                <a target='_blank' href={`https://api.whatsapp.com/send?phone=55${props.obj.phone}`}>
                    <h6>Entre em contato</h6>
                    <div>
                        <AiOutlineWhatsApp/>
                        <p>{props.obj.phone}</p>
                    </div>
                </a>
              </div>
              <div className='lastSection_addMentor'>
                <div>
                    <AiOutlinePlusCircle/>
                    <p>Adicionar como mentor</p>
                </div>
              </div>
            </div>
          </div>
    )
}