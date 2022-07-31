import React, { useState } from 'react';
import useFetch from '../useFetch';
import { TeacherDetails } from './TeacherDetails';

const Teacher = () => {

    const{ isLoading, error, data } = useFetch('/teachers','GET')
    const [selectedTeacher, setSelectedTeacher] = useState("");

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

                <label htmlFor="search-teacher">Please select a teacher:</label>
                <input list="teachers" id="search-teacher" name="search-teacher" placeholder='select a teacher' value={selectedTeacher} onChange={e => setSelectedTeacher(e.target.value)} />

                <datalist id="teachers">
                    {
                        data?.map(teacher => {
                            return (<option key={teacher.teacherId} value={teacher.teacherName} />)
                        })
                    }
                </datalist>
            </div>
            <div>
                {selectedTeacher ? 
                    <TeacherDetails selectedTeacher={selectedTeacher} />
                    : 
                    <></>
                }
            </div>
        </div>
    );
}

export default Teacher;