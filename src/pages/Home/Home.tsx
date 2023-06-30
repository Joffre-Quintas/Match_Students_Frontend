import { useEffect, useState } from "react";
import SectionPeriod from "../../components/SectionPeriod/SectionPeriod";
import IStudent from '../../types/IStudents';
import Loading from "../../components/Loading/Loading";

import { URL } from "../../utils/URL";

export default function Home() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        window.scrollTo({
            top:0
        })
        async function loadData() {
            const data = await fetch(`${URL}/home`);
            const dataConverted = await data.json();
            setStudent(dataConverted);
        }
        loadData();
    }, []);

    if (student.length == 0) {
        return (<div className="container">
            <Loading/>
        </div>);
    } else {
        return (
            <div className="container">
                {Object.values(student).map((users: IStudent[], index: number) => (
                    <SectionPeriod key={index} period={index + 1} arr={users} />
                ))}
            </div>
        );
    }
}
