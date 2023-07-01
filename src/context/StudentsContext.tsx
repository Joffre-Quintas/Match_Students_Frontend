import { createContext, useState, useEffect } from 'react';
import { URL } from '../utils/URL';
import IStudent from '../types/IStudents';

interface IStudentsContext {
  listStudents: IStudent[];
  setListStudents: React.Dispatch<React.SetStateAction<IStudent[]>>
}

export const StudentContext = createContext<IStudentsContext>({
  listStudents: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setListStudents: () => {}
});

export default function StudentsProvider({ children }: { children: JSX.Element }) {
  const [listStudents, setListStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    async function getAllStudents() {
      const response = await fetch(`${URL}/home`);
      const allStudents = await response.json();
      setListStudents(allStudents);
    }
    getAllStudents();
  }, []);

  return (
    <StudentContext.Provider value={{ listStudents, setListStudents }}>
      {children}
    </StudentContext.Provider>
  );
}
