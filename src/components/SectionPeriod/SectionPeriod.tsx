
import './SectionPeriod.scss';
import { useState } from 'react';
import IStudent from '../../types/IStudents';

// Icons
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineWhatsApp, AiOutlinePlusCircle } from 'react-icons/ai';



interface SectionPeriodProps {
  period: number;
  arr: IStudent[];
}

export default function SectionPeriod(props: SectionPeriodProps) {
  const [show, setShow] = useState(false);

  
  return (
    <section className='period'>
      <h2 className='period_title'>{props.period}º Período</h2>
      <div className='period_listStudents'>
        {props.arr.map((student: IStudent, index: number) => (
          <div className={show ? 'period_listStudents_cardStudent ' + 'show' : 'period_listStudents_cardStudent'} key={index}>
            <div className='period_listStudents_cardStudent_defaultView'>
              <div>
                <h6>Nome Completo</h6>
                <p>{student.completeName}</p>
              </div>
              <div>
                <h6>Turno</h6>
                <p>{student.turn}</p>
              </div>
              <div>
                <h6>Podem mentorar?</h6>
                <p>{student.isAvaliable ? 'Sim' : 'Não'}</p>
              </div>
              <MdOutlineKeyboardArrowDown
                className={show ? 'rotate' : ''}
                onClick={() => setShow((current) => !current)}
              />
            </div>
            {student.interest.length !== 0 && (
              <div className='period_listStudents_cardStudent_interest'>
                <h6>Interesses</h6>
                <div className='period_listStudents_cardStudent_interest_carousselFlags'>
                  {student.interest.map((interest: string, index: number) => (
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
            {student.tutor && student.tutor.length !== 0 && (
              <div className='period_listStudents_cardStudent_interest'>
                <h6>Mentor</h6>
                <div className='period_listStudents_cardStudent_interest_carousselFlags'>
                  {student.tutor.map((tutor: string, index: number) => (
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
            {student.student && student.student.length !== 0 && (
              <div className='period_listStudents_cardStudent_interest'>
                <h6>Mentorado por</h6>
                <div className='period_listStudents_cardStudent_interest_carousselFlags'>
                  {student.student.map((studentName: string, index: number) => (
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
                <a target='_blank' href={`https://api.whatsapp.com/send?phone=${student.phone}`}>
                    <h6>Entre em contato</h6>
                    <div>
                        <AiOutlineWhatsApp/>
                        <p>{student.phone}</p>
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
        ))}
      </div>
    </section>
  );
}
