import React from 'react'

const BirthdayToday = ({ people,removePerson }) => {


    const divStyleCard = {
        width: "14rem",
        color:"#121212",
    }
    return (
        <>
            {people.map((person) => {
                const { id,path, name, birthday } = person;
                return (
                    <div key={id} className="card m-2 mx-auto" style={divStyleCard}>
                        <img className="card-img-top" src={path} alt={name} />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{birthday}</p>
                            <button className="btn btn-primary" onClick={()=>{removePerson(id)}}>Remove</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default BirthdayToday
