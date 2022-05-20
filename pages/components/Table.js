import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";
import itemsFromBackend from './ClassList.json';
import styled from "styled-components"
import { supabase } from '../../lib/supabase'
import {useEffect} from "react"


const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {

    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};
const columnsFromBackend = {
  ["1"]: {
    name: "All Classes",
    items: itemsFromBackend
  },
  ["2"]: {
    name: "2019-2020",
    items: []
  },
  ["3"]: {
    name: "2020-2021",
    items: []
  },
  ["4"]: {
    name: "2021-2022",
    items: []
  },
  ["5"]: {
    name: "2022-2023",
    items: []
  }
};

export default function Table() {

  const [columns, setColumns] = useState(columnsFromBackend);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetchDataFromSupabase()
  },[loading])
  
  // fetch data function example
  const fetchDataFromSupabase = async () => {
    let { data: classes, error } = await supabase
        .from('classes')
        .select('*')
    if (error) setError(error.message)
    else {
        setData(classes)
        setLoading(false)
    }
  }
  
  if(loading){
    return <p style={{ display: "flex", padding: 16 ,margin: "15", fontSize:"2rem", color: "#A50034", minHeight: "50px", justifyContent:"center"}}
    >loading..</p>
  }
  if(error){
    <p style={{ display: "flex", padding: 16 ,margin: "15", fontSize:"2rem", color: "#A50034", minHeight: "50px", justifyContent:"center"}}
    >{JSON.stringify}</p>
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#6E6259"
                
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#6E6259"
                            : "#DDCBA4",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <Card
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#7a0027"
                                        : "#A50034",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    <p><b>Class:</b> {item.class}</p>
                                    <p><b>Offered:</b> {item.offered}</p>
                                    <p><b>Prereqs:</b> {item.prereq}</p>
                                    <p><b>Credits:</b> {item.credits}</p>
                                  </Card>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

resetServerContext()

const Card = styled.div``