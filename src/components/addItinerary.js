import React, { useRef, useState } from 'react';
import Button from './button';
import TextInput from './textInput';

function AddItinerary({ handleAdd}) {

    let titleRef = useRef();
    let dateRef = useRef();
    const formRef = useRef();
    const [itinerary, setItinerary] = useState({ title: "", date: "" })
    const handleInput = (e) => {
        let name = e.target.name;
        switch (name) {
            case "title":
                setItinerary({ ...itinerary, title: titleRef.current.value })
                break;
            case "date":
                setItinerary({ ...itinerary, date: dateRef.current.value })
                break;
            default:
                break;
        }
    }
    const handleSubmit = () => {
        handleAdd(itinerary);
        formRef.current.reset();
    }

    return (
        <div id="modal" className="overflow-auto bg-gray-100 w-full">
            <div className="bg-white m-auto p-10 border border-blue-300 shadow">
                <div>
                    <form ref={formRef} className="flex flex-col gap-2">
                        <TextInput name={"title"} id={"title"} label={"Title"} onInput={handleInput} refInp={titleRef} placeholder={"Type Title"} type={"text"} />
                        <TextInput name={"date"} id={"date"} label={"Date"} onInput={handleInput} refInp={dateRef} placeholder={"Type Title"} type={"datetime-local"} />
                        <Button handleClickOpen={handleSubmit} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddItinerary;