import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => { 
    let courses =props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        if(category === "All") {
              
        
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    else {
        // main sirf specific category ka array pass krunga
        return courses[category];
    }
}
    // returns you a list of all courses received from the api response 
    
    return(
        <div className='justify-center flex flex-wrap gap-4 mb-4 '>
            {
                getCourses().map( (course) => (
                    <Card key={course.id} 
                    course ={course} 
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}/> 
                ))
            }
        </div>
    )
}

export default Cards


