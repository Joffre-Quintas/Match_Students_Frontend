// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { useEffect } from "react";
import SectionPeriod from "../../components/SectionPeriod/SectionPeriod";
import IStudent from '../../types/IStudents';
import Loading from "../../components/Loading/Loading";
import { useContext } from 'react';
import { StudentContext } from '../../context/StudentsContext';

export default function Home() {
    const { listStudents } = useContext(StudentContext);

    useEffect(() => {
        window.scrollTo({
            top:0
        })   
    }, []);

    if (listStudents.length == 0) {
        return (<div className="container">
            <Loading/>
        </div>);
    } else {
        return (
            <div className="container">
                {Object.values(listStudents).map((users: IStudent[], index: number) => (
                    <SectionPeriod key={index} period={index + 1} arr={users} />
                ))}
            </div>
        );
    }
}
