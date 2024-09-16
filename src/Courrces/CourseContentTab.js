import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'

const CourseContentTab = ({clickTo,course}) => {
   
  const courseTabs =[
    'About Course',
    'Learning Outcomes',
    'Syllabus', 
  ]
  const [currentTab,setCurrentTab]=useState(courseTabs[0]);
  return (
    <>
    <div>
        <div className='course-content-tab'>
            <ul>
                <li>
                <ul>
                  {courseTabs.map((e)=><li onClick={()=>setCurrentTab(e)} className={e==currentTab?`active`:''}>{e}</li>)}  
                </ul>
                </li>
                <li>
                    <button type='button' onClick={clickTo}>Enroll Now</button>
                </li>
            </ul>
             
        </div>
    </div>
    <section>
      <div className="course-tab">
        <div className="course-container">
            {currentTab==courseTabs[0] &&
            <>
            <h1 className="course-title">About this Course</h1>
            <p className="course-description">
              
              {course.about_course??''}
            </p> 
            </>
            }
            {currentTab==courseTabs[1] &&
            <>
            <h2 className="learning-objectives-title">Learning Out Comes</h2>
            <div dangerouslySetInnerHTML={{ __html: course.objectives }} />
            </>
            }
            
            {currentTab==courseTabs[2] &&
            <>
             <h2 className="topics-covered-title">Syllabus</h2>
             <div dangerouslySetInnerHTML={{ __html: course.course_outline }} />
            </>
            }

             

            

            
          </div>
          <div className="details-container">
            <h1 className="details-title">Course Details</h1>

            <ul className="details-list">
              <li>
                <strong>Duration:</strong> {course.duration}
              </li>
              <li>
                <strong>Price:</strong> ₹{course.price}
              </li>
              <li>
                <strong>Level:</strong> Medium
              </li>
              
              <li>
                <strong>Language:</strong> English
              </li>
            </ul>

            <h2 className="prerequisites-title">Course Prerequisites</h2>
            <p className="prerequisites-description">
              {course.prerequisites}
            </p>

            <h2 className="instructor-title">
              Prefer learning from an instructor?
            </h2>
            <p className="instructor-description">
              Request a private workshop or view our public workshop schedule.
            </p>
          </div>
      </div>
          
      
      </section>
    </>
  )
}

export default CourseContentTab