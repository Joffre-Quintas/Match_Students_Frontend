import { useEffect, useState } from "react";
import SectionPeriod from "../../components/SectionPeriod/SectionPeriod";
import IStudent from '../../types/IStudents';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetch('https://match-students-api.onrender.com/home');
            const dataConverted = await data.json();
            setUsers(dataConverted);
        }
        loadData();
    }, []);

    if (!users) {
        return (<div className="container"><h1>Loading...</h1></div>);
    } else {
        return (
            <div className="container">
                {Object.values(users).map((users: IStudent[], index: number) => (
                    <SectionPeriod key={index} period={index + 1} arr={users} />
                ))}
            </div>
        );
    }
}
