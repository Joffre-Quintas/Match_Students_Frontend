// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import './SectionPeriod.scss';
import IStudent from '../../types/IStudents';
import StudentCard from './StudentCard/StudentCard';

export default function SectionPeriod(props) {

  return (
    <section className='period'>
      <h2 className='period_title'>{props.period}º Período</h2>
      <div className='period_listStudents'>
        {props.arr.map((student:IStudent, index: number) => (
          <StudentCard key={index} obj={student}/>
        ))}
      </div>
    </section>
  );
}
