import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import DragDrop from './components/DradDrop';


export default function body(){
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <DragDrop/>
            </div>
        </DndProvider>
    );
}