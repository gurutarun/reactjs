import React from 'react';
import useFetch from '../useFetch';

export const TeacherDetails = ( selectedTeacher ) => {

    const { isLoading, error, data} = useFetch(`/teachers/name/${selectedTeacher.selectedTeacher}`, 'GET');

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
            <div>Teacher Details</div>
            <div>
                <span>Teacher Id: </span>
                <span>{data.teacherId}</span>
            </div>
            <div>
                <span>Teacher Name: </span>
                <span>{data.teacherName}</span>
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