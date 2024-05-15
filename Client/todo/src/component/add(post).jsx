import { useState } from "react";
import axios from "axios";
function Adding(){
    const [task, settask] = useState("");


    function addtask(e){
      settask(e.target.value);
    }
    function recordSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:4000/post", {task})
             .then(data => console.log(data))
             .catch(error => console.log(error));
    }
    return(
        <div>
            <form>
                <div>
                    <input type="text" placeholder="Task Name" onChange={addtask} />
                </div>

            </form>
            <button onClick={recordSubmit}>Add</button>
        </div>
    );
}

export default Adding;