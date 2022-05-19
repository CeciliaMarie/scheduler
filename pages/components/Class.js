// import { monitorEventLoopDelay } from 'perf_hooks'
// import React from 'react';
import { useDrag } from 'react-dnd';

export default function Class({id, course, offered, prereq, credits }){
    
    
    const[{isDragging}, drag] = useDrag(() => ({
        type: "Course",
        collect:(monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })); 

    return (
    <div key={id.toString()}>
        <div className="Course"
            style={{ padding: 10,
                margin: "0 0 8px 0",
                minHeight: "10vh",
                maxWidth: "12vw",
                color: "white",
                backgroundColor: isDragging? "#263B4A": "#456C86"
            }}>
            <p>Class: {course}</p>
            <p>Offered: {offered}</p>
            <p>Prereqs: {prereq}</p>
            <p>Credits: {credits}</p>  
        </div>
    </div>)
}

        {/* <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
        userSelect: "none",
        padding: 16,
        margin: "0 0 8px 0",
        minHeight: "50px",
        backgroundColor: snapshot.isDragging
            ? "#263B4A"
            : "#456C86",
        color: "white",
        ...provided.draggableProps.style
        }}
        >
        <p>Class: {item.class}</p>
        <p>Offered: {item.offered}</p>
        <p>Prereqs: {item.prereq}</p>
        <p>Credits: {item.credits}</p>
        </div>
        );
        } */}

// const Classes = styled.div`
//     padding: 16;
//     margin: "0 0 8px 0";
//     minHeight: "50px";
//     backgroundColor: "#263B4A";
//     color: "white";
// }`
