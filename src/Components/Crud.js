import React, { useRef, useState } from "react";


function CRUD() {
    const list = [
        {
            id: 1,
            name: "HP",
            price: "10000",
        },
        {
            id: 2,
            name: "Dell",
            price: "20000"
        }
    ]
    const [lists, setList] = useState(list)
    const[updateState, setupdateState]= useState(-1)
    console.log(list);
    return (

        <div className="crud">
            <div className="addform">

                <AddList setList={setList} />
                 <form onSubmit={handleSubmit}>
                <table>
                    {
                        list.map((current) => (
                            updateState===current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                            <tr>                               
                                <td>
                                    {current.name}
                                </td>
                                <td>
                                    {current.price}
                                </td>
                                <td>
                                    <button className="edit" onClick={()=>handleEdit(current.id)}>
                                        Edit
                                    </button>
                                    <button className="delete">
                                        Delete
                                    </button>
                                </td>

                            </tr>


                        )

                        )
                    }
                </table>
                </form>
            </div>
        </div>
    )
function handleEdit(id)
{
    setupdateState(id)


}

function handleSubmit(event)
{event.preventDefault();

const name=event.target.elements.name.value;
const price=event.target.elements.price.value;
const newlist = lists.map((li)=>
        (
            li.id=== updateState ? {...li , name:name , price:price} : li
        )
        )

        setList(newlist)
        setupdateState(-1)
}
}

function AddList({ setList }) {
    const nameref=useRef();
    const priceref=useRef();
    function handleSubmit(event) {
        debugger
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist = [{
            id: 3,
            name,
            price
        }]
        setList((prevList) => {
             return prevList.concat(newlist)
        })
        nameref.current.value="";
        priceref.current.value="";
    }
    return (

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameref} />
            <input type="text" name="price" placeholder="Enter Price" ref={priceref} />
            <button type="submit"> Add </button>

        </form>
    )

}


function EditList({current, lists, setList})
{
    function handleInput(event)
    {
        const name=event.target.name;
        const value=name.value;
        const newlist = lists.map((li)=>
        (
            li.id=== current.id ? {...li , name:value} : li
        )
        )

        setList(newlist)
    }
    return (
        <tr>
            <td><input type="text" onChange={handleInput} name="name"/></td>
            <td><input type="text" name="price" value={current.price}/></td>
            <td><button type="submit">Update</button></td>
        </tr>

    )
}
export default CRUD;