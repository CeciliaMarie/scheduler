import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd"


// import Tabs from "./components/Tabs";

const itemsFromBackend = [
  {
    id: "230",
    class: "CPSC 230",
    offered: "Every Semester",
    prereq: "None",
    credits: "3"
  },
  {
    id: "298",
    class: "CPSC 298",
    offered: "Every Semester",
    prereq: "None",
    credits: "1"
  },
  {
    id: "110",
    class: "MATH 110",
    offered: "Every Semester",
    prereq: "MATH 99",
    credits: "3"
  },
  {
    id: "100",
    class: "FFC 100",
    offered: "Every Semester",
    prereq: "None",
    credits: "3"
  },
  {
    id: "150",
    class: "SCI 150",
    offered: "Every Semester",
    prereq: "FFC 100",
    credits: "1" 
  },
  {
    id: "231",
    class: "CPSC 231",
    offered: "Every Semester",
    prereq: "CPSC 230",
    credits: "3"
  },
  
];

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

function Testing() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {/* Figure out how to map only the first column */}
        {/* figure out how to make tabs and put the table in a tab */}
        {/* then map the rest of the columns */}
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#231F20"
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
                                  <div
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
                                    <p>Class: {item.class}</p>
                                    <p>Offered: {item.offered}</p>
                                    <p>Prereqs: {item.prereq}</p>
                                    <p>Credits: {item.credits}</p>
                                  </div>
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
export default Testing;
