import React from 'react';
import useFetch from '../useFetch';

export const StudentDetails = ( selectedStudent ) => {

    const { isLoading, error, data} = useFetch(`/students/name/${selectedStudent.selectedStudent}`, 'GET');

    if (isLoading === true) {
        return(
            <div>isLoading</div>
        )
    }
    else if(error.show === true) {
        return(
            <div>{error.msg}</div>
        )
    }

    return (
        <div>
            <div>Student Details</div>
            <div>
                <span>Student Id: </span>
                <span>{data.studentId}</span>
            </div>
            <div>
                <span>Student Name: </span>
                <span>{data.studentName}</span>
            </div>
            {
                data.courses.length ? 
                <div>
                    <span>Courses: </span>
                    <span>
                        {
                            data.courses?.map( course => {
                                return(<div key={course.courseId}>
                                    <div>Course Id: {course.courseId}</div>
                                    <div>Course Name: {course.courseName}</div>
                                </div>)
                            }) 
                        }
                    </span>
                </div>
                :
                <></>
            }
        </div>
    );
}