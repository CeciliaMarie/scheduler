import React from 'react';
// import classList from './ClassList.json';
import Course from './Class';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { resetServerContext } from "react-beautiful-dnd"

const classList = [
    {
      id: "CPSC230",
      course: "CPSC 230",
      offered: "Every Semester",
      prereq: "None",
      credits: "3"
    },
    {
      id: "CPSC298",
      course: "CPSC 298",
      offered: "Every Semester",
      prereq: "None",
      credits: "1"
    },
    {
      id: "MATH110",
      course: "MATH 110",
      offered: "Every Semester",
      prereq: "MATH 99",
      credits: "3"
    },
    {
      id: "FFC100",
      course: "FFC 100",
      offered: "Every Semester",
      prereq: "None",
      credits: "3"
    },
    {
      id: "CPSC231",
      course: "CPSC 231",
      offered: "Every Semester",
      prereq: "CPSC 230",
      credits: "3"
    }
  ];
  
//   const columnsFromBackend = {
//     [uuid()]: {
//       name: "All",
//       items: itemsFromBackend
//     },
//     [uuid()]: {
//       name: "Fall",
//       items: []
//     },
//     [uuid()]: {
//       name: "Interterm",
//       items: []
//     },
//     [uuid()]: {
//       name: "Spring",
//       items: []
//     },
//     [uuid()]: {
//       name: "Summer",
//       items: []
//     }
//   };

export default function DragDrop(){
    return(
        <>
        <DndProvider backend={HTML5Backend}>
            <div className="Classes">
                {classList.map((lecture) => {
                    return <Course course={lecture.course} credits={lecture.credits} prereq={lecture.prereq} offered={lecture.offered} id={lecture.id} 
                    />;})}
            </div>
            <div className="Tables"></div>
        </DndProvider>
        </>
    );
}


// const Class = styled.div`
//     padding: 16;
//     margin: "0 0 8px 0";
//     minHeight: "50px";
//     backgroundColor: "#263B4A";
//     color: "blue";
// }`