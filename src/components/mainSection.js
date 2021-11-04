import React from 'react';
function MainSection({ arrayData, remove }) {

    return (
        <div className="my-4 flex flex-col gap-2">
            {
                arrayData.map((itn, index) => {
                    return (
                        <div key={index} class="modal">
                            <div className="bg-gray-200 p-2">
                                <span onClick={e => remove(index)} className="text-red-700 float-right hover:text-red-300 font-bold text-2xl cursor-pointer">&times;</span>
                                <div>
                                    <h1 className="font-bold text-base">{itn.title}</h1>
                                    <code>{new Date(itn.date).toLocaleString('en-us', { weekday: 'long' })} At {new Date(itn.date).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</code>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MainSection;