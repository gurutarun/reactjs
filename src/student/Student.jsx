import React, { useState } from 'react';
import useFetch from '../useFetch';
import { StudentDetails } from './StudentDetails';

export const Student = () => {

    const { isLoading, error, data} = useFetch(`/students`, 'GET');
    const [selectedStudent, setSelectedStudent] = useState("");

    if (isLoading === true){
        return (
            <div> isLoading </div>
        );
    }

    if (error.show === true){
        return(
            <div>{error.msg}</div>
        );
    }
    

    return (
        <div>
            <div>
                <h1>Welcome</h1>

                <label htmlFor="search-student">Please select a student:</label>
                <input list="students" id="search-student" name="search-student" placeholder='select a student' value={selectedStudent} onChange={e => setSelectedStudent(e.target.value)} />

                <datalist id="students">
                    {
                        data?.map(student => {
                            return (<option key={student.studentId} value={student.studentName} />)
                        })
                    }
                </datalist>
            </div>
            <div>
                {selectedStudent ? 
                    <StudentDetails selectedStudent={selectedStudent} />
                    : 
                    <></>
                }
            </div>
        </div>
    );
}